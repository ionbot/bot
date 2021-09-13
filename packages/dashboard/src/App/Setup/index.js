import { useState } from 'react'
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import SetupForm from './Form'
import { Button } from '@chakra-ui/button'

const Setup = () => {
	const { t } = useTranslation()
	const [profile, setProfile] = useState({})

	const SetupView = () => (
		<>
			<Stack spacing={6}>
				<Heading size='2xl' textColor='gray.600'>
					{t('setup.title')}
				</Heading>
				<Text textColor='gray.400'>{t('setup.subTitle')}</Text>
			</Stack>
			<SetupForm onSuccess={setProfile} />
		</>
	)

	const ProfileView = () => (
		<Stack spacing={4} textColor='gray.500'>
			<Heading textColor='gray.600'>{t('setup.success')}</Heading>
			<Text>{t('setup.successInfo')}</Text>

			<Text fontSize='lg'>
				{t('setup.greetings', { name: profile.firstName })}
			</Text>
			<Flex>
				<Button
					variant='outline'
					size='sm'
					onClick={() => (window.location.href = '/')}
				>
					Continue
				</Button>
			</Flex>
		</Stack>
	)

	return (
		<Box h='100vh' bg='gray.50'>
			<Center p={3} py={8}>
				<Box
					bg='white'
					w={{ base: 'md', lg: 'xl' }}
					py={12}
					px={4}
					shadow='xl'
					borderTopColor={profile.self ? 'green.300' : 'brand.300'}
					borderTopWidth='4px'
					rounded='xl'
				>
					{profile.self ? <ProfileView /> : <SetupView />}
				</Box>
			</Center>
		</Box>
	)
}

export default Setup
