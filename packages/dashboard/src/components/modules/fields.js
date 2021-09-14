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
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import realsync from '../../providers/realsync'

export const ModuleFields = ({ fields, module, onSave }) => {
	const { t } = useTranslation()
	const keys = Object.keys(fields)
	const [moduleConfig, setModuleConfig] = useState({ __loading: true })

	const SaveConfig = () => {
		if (!moduleConfig.__loading) {
			let finalConfig = moduleConfig
			delete finalConfig['__loading']

			realsync.service('ion/save-modconf', [module, finalConfig])
		}
	}

	const Fetch = async () => {
		const modConf = await realsync.service('ion/load-modconf', [module])
		setModuleConfig({ ...modConf, __loading: false })
	}

	useEffect(() => {
		SaveConfig()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moduleConfig])

	useEffect(() => {
		Fetch()
	}, [])

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
							<Text fontWeight='normal'>{t(i18nkeyInfo)}</Text>
						</Box>
						<Spacer />
						<Switch
							isChecked={moduleConfig[field]}
							onChange={(e) => {
								setModuleConfig({
									...moduleConfig,
									[field]: !moduleConfig[field],
								})
							}}
						/>
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
