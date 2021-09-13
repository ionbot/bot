import { useEffect, useState } from 'react'
import useFetch from 'use-http'
import {
	Avatar,
	Box,
	Flex,
	Heading,
	Text,
	SimpleGrid,
	Center,
	Spinner,
} from '@chakra-ui/react'

export const IonContributor = () => {
	const contributorApi = useFetch(
		'https://api.github.com/repos/ionbot/bot/contributors'
	)
	const [contributors, setContributors] = useState([])

	const Fetch = async () => {
		contributorApi.get().then((data) => {
			setContributors([...data])
		})
	}

	useEffect(() => {
		Fetch()
	}, [])

	if (contributorApi.loading) {
		return (
			<Center mt={4}>
				<Spinner />
			</Center>
		)
	}

	return (
		<SimpleGrid
			spacing={4}
			mt={6}
			columns={{ base: 2, md: 4 }}
			userSelect='none'
		>
			{contributors.map((contributor, idx) => {
				return (
					<a
						href={`https://github.com/${contributor.login}`}
						target='_blank'
						rel='noreferrer'
					>
						<Flex key={idx} alignItems='center'>
							<Avatar src={contributor.avatar_url} />
							<Box ml={2}>
								<Heading size='md' fontWeight='light'>
									{contributor.login}
								</Heading>
								<Text>{contributor.contributions} contributions</Text>
							</Box>
						</Flex>
					</a>
				)
			})}
		</SimpleGrid>
	)
}