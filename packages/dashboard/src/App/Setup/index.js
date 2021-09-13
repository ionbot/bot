import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout'
import SetupForm from './Form'

const Setup = () => {
	return (
		<Box h='100vh'>
			<Center p={3} py={8}>
				<Box
					bg='white'
					w={{ base: 'md', lg: 'xl' }}
					py={12}
					px={4}
					shadow='lg'
					borderTopColor='brand.500'
					borderTopWidth='4px'
					rounded='lg'
				>
					<Stack spacing={6}>
						<Heading size='2xl'>Ion Setup</Heading>
						<Text>
							Et elit ad eiusmod sunt exercitation occaecat laboris velit id
							nisi consectetur nisi sit fugiat.
						</Text>
					</Stack>

					<SetupForm />
				</Box>
			</Center>
		</Box>
	)
}

export default Setup
