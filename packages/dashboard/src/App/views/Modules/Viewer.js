import { Box, Heading, Text } from '@chakra-ui/layout'
import { Redirect } from 'react-router'

export const ModuleViewer = ({ location }) => {
	const { state: module } = location

	if (!module) {
		return <Redirect to={'/modules'} />
	}

	return (
		<Box>
			<Heading>{module.name}</Heading>
			<Text>{module.info}</Text>
		</Box>
	)
}
