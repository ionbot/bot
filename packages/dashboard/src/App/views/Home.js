import {
	Box,
	Divider,
	Flex,
	Heading,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { BiGroup, BiChalkboard, BiCode, BiUserMinus } from 'react-icons/bi'

const Home = () => {
	const { t } = useTranslation()

	const Statistic = ({ title, value, icon, color }) => (
		<Flex rounded='2xl' p={4} alignItems='center'>
			<Box
				fontSize='6xl'
				mr={4}
				p={3}
				bg={`${color}.100`}
				textColor={`${color}.300`}
				rounded='2xl'
			>
				{icon}
			</Box>
			<Box>
				<Heading size='lg'>{value}</Heading>
				<Text fontSize='2xl'>{title}</Text>
			</Box>
		</Flex>
	)

	return (
		<Box>
			<Heading>{t('common.home')}</Heading>

			<Stack mt={8} spacing={8}>
				<SimpleGrid
					columns={{ base: 1, lg: 2, '2xl': 4 }}
					maxW='1600px'
					spacing={4}
				>
					<Statistic
						title={t('stats.groups')}
						value={84}
						icon={<BiGroup />}
						color='teal'
					/>

					<Statistic
						title={t('stats.channels')}
						value={134}
						icon={<BiChalkboard />}
						color='orange'
					/>

					<Statistic
						title={t('stats.bannedUsers')}
						value={134}
						icon={<BiUserMinus />}
						color='red'
					/>

					<Statistic
						title={t('stats.commands')}
						value={'06'}
						icon={<BiCode />}
						color='green'
					/>
				</SimpleGrid>
				<Divider />
			</Stack>
		</Box>
	)
}

export default Home
