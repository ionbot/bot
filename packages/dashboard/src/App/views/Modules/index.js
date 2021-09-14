import { useEffect, useState } from 'react'
import { Box, Spacer, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import realsync from '../../../providers/realsync'

const Home = () => {
	const [modules, setModules] = useState([])

	const { t } = useTranslation()
	const Fetch = async () => {
		const _modules = await realsync.service('ion/loaded-modules')
		setModules(_modules)
	}

	useEffect(() => {
		Fetch()
	}, [])

	return (
		<Box>
			<Heading>{t('common.modules')}</Heading>
			<SimpleGrid
				mt={8}
				columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }}
				spacing={4}
			>
				{modules.map((module) => {
					const { id } = module
					const name = t(`modules.${id}.name`)
					const info = t(`modules.${id}.info`)

					return (
						<Link
							to={{
								pathname: `/modules/${id}`,
								state: { ...module, name, info },
							}}
							key={id}
						>
							<Box
								p={4}
								bg='gray.50'
								rounded='2xl'
								transition='all 0.4s'
								pos='relative'
								cursor='pointer'
								willChange='transform'
								_hover={{
									transform: 'scale(1.02)',
									bg: 'gray.100',
								}}
								userSelect='none'
							>
								<Flex alignItems='center'>
									<Heading
										size='lg'
										bgGradient='linear(to-r, blue.200,purple.200)'
										bgClip='text'
									>
										{name}
									</Heading>
									<Spacer />
									<Tag variant='outline'>active</Tag>
								</Flex>
								<Text>{info}</Text>
							</Box>
						</Link>
					)
				})}
			</SimpleGrid>
		</Box>
	)
}

export default Home
