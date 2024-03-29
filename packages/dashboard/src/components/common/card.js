import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/layout'

export const IonCard = ({ title, subTitle, right, color, icon, children }) => {
	return (
		<Box p={4} rounded='lg' w='full'>
			<Flex alignItems='center'>
				<Box
					fontSize='5xl'
					p={2}
					rounded='xl'
					textColor={`${color}.400`}
					bg={`${color}.100`}
				>
					{icon}
				</Box>
				<Box ml={2}>
					<Heading size='lg' fontWeight='normal'>
						{title}
					</Heading>
					<Text mt={1}>{subTitle}</Text>
				</Box>
				<Spacer />
				{right}
			</Flex>

			<Box mt={2}>{children}</Box>
		</Box>
	)
}
