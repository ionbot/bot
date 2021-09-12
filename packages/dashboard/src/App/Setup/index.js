import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout'
import Step1 from './steps/Step1'

const Setup = () => {
	return (
		<Center mt={4} p={3}>
			<Box
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
						Et elit ad eiusmod sunt exercitation occaecat laboris velit id nisi
						consectetur nisi sit fugiat.
					</Text>
				</Stack>

				<Step1 />
			</Box>
		</Center>
	)
}

export default Setup
