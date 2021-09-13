import { Center } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

export const SuspenseFallback = () => {
	return (
		<Center mt={{ base: 12, lg: 24 }}>
			<Spinner />
		</Center>
	)
}
