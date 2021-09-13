import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import SetupForm from './Form'

const Setup = () => {
	const { t } = useTranslation()
	return (
		<Box h='100vh' bg='gray.50'>
			<Center p={3} py={8}>
				<Box
					bg='white'
					w={{ base: 'md', lg: 'xl' }}
					py={12}
					px={4}
					shadow='2xl'
					borderTopColor='brand.500'
					borderTopWidth='4px'
					rounded='xl'
				>
					<Stack spacing={6}>
						<Heading size='2xl'>{t('setup.title')}</Heading>
						<Text>{t('setup.subTitle')}</Text>
					</Stack>

					<SetupForm />
				</Box>
			</Center>
		</Box>
	)
}

export default Setup
