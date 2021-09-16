import {
	Box,
	Divider,
	Flex,
	Heading,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/layout'
import {
	Switch,
	Textarea,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import realsync from '../../providers/realsync'

export const ModuleFields = ({ fields, module, onSave }) => {
	const { t } = useTranslation()
	const keys = Object.keys(fields)
	const [moduleConfig, setModuleConfig] = useState({ __loading: true })

	const SaveConfig = (name, value) => {
		realsync.service('ion/save-modconf', [module, { name, value }])
	}

	const Fetch = async () => {
		const modConf = await realsync.service('ion/load-modconf', [module])
		setModuleConfig({ ...modConf, __loading: false })
	}

	useEffect(() => {
		Fetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const Field = (data) => {
		const { type, field, hint } = data
		let component = null
		const fieldName = t(`modules.${module}.config.${field}`)
		const fieldInfo = t(`modules.${module}.config.${field}Info`)

		switch (type) {
			case 'switch':
				component = (
					<Flex alignItems='center'>
						<Box>
							<Heading size='md' fontWeight='normal'>
								{fieldName}
							</Heading>
							<Text fontWeight='normal'>{fieldInfo}</Text>
						</Box>
						<Spacer />
						<Switch
							isChecked={moduleConfig[field]}
							onChange={(e) => {
								setModuleConfig({
									...moduleConfig,
									[field]: !moduleConfig[field],
								})
								SaveConfig(field, !moduleConfig[field])
							}}
						/>
					</Flex>
				)
				break
			case 'text':
				component = (
					<Box>
						<Heading size='md' fontWeight='normal'>
							{fieldName}
						</Heading>
						<Text fontWeight='normal'>{fieldInfo}</Text>
						<Textarea
							mt={4}
							placeholder={hint}
							_focus={{ borderWidth: '2px', borderColor: 'brand.400' }}
							defaultValue={moduleConfig[field]}
							onBlur={(e) => {
								SaveConfig(field, e.target.value)
							}}
						/>
					</Box>
				)
				break
			case 'slider':
				component = (
					<Box>
						<Heading size='md' fontWeight='normal'>
							{fieldName}
						</Heading>
						<Text fontWeight='normal'>{fieldInfo}</Text>
						<NumberInput
							mt={4}
							defaultValue={0.3}
							min={data.min}
							max={data.max}
							step={0.1}
							onBlur={(e) => {
								SaveConfig(field, e.target.value)
							}}
						>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
					</Box>
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
					<Field field={key} {...fields[key]} />
					<Divider mt={4} />
				</Box>
			))}
		</Stack>
	)
}
