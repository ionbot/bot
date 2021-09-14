import {
	Box,
	Divider,
	Flex,
	Heading,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/layout'
import { Switch } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const ModuleFields = ({ fields, module }) => {
	const { t } = useTranslation()
	const keys = Object.keys(fields)

	const Field = ({ type, field }) => {
		let component = null
		const i18nkey = `modules.${module}.config.${field}`
		const i18nkeyInfo = `modules.${module}.config.${field}Info`

		switch (type) {
			case 'switch':
				component = (
					<Flex alignItems='center'>
						<Box>
							<Heading size='md' fontWeight='normal'>
								{t(i18nkey)}
							</Heading>
							<Text>{t(i18nkeyInfo)}</Text>
						</Box>
						<Spacer />
						<Switch />
					</Flex>
				)
				break
			default:
				component = null
		}
		return component
	}

	return (
		<Stack spacing={4}>
			{keys.map((key) => (
				<Box key={key}>
					<Field field={key} type={fields[key].type} />
					<Divider mt={4} />
				</Box>
			))}
		</Stack>
	)
}
