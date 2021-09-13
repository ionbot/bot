import { Flex, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

export const IonLoader = ({ title }) => {
	return (
		<Flex alignItems='center' p={4} borderWidth='1px' rounded='lg'>
			<Spinner />
			<Text ml={4}>{title}</Text>
		</Flex>
	)
}
