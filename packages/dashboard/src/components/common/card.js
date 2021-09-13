import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

export const IonCard = ({ title, subTitle, color, icon, children }) => {
	return (
		<Box p={4} rounded='lg' w='full'>
			<Flex alignItems='center'>
				<Box
					fontSize='5xl'
					mr={3}
					p={2}
					rounded='xl'
					textColor={`${color}.400`}
					bg={`${color}.100`}
				>
					{icon}
				</Box>
				<Box>
					<Heading size='lg' fontWeight='normal'>
						{title}
					</Heading>
					<Text mt={1}>{subTitle}</Text>
				</Box>
			</Flex>

			<Box mt={2}>{children}</Box>
		</Box>
	)
}
