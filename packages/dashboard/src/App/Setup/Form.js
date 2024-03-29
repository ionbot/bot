import { useEffect } from 'react'
import { Box, Flex, Spacer, Stack } from '@chakra-ui/layout'
import {
	Button,
	Input,
	FormControl,
	FormLabel,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import realsync from '../../providers/realsync'
import Emitter from '../../providers/eventemitter'

import SetupPassword from '../../components/setup/Password'
import SetupPhoneCode from '../../components/setup/PhoneCode'

const Step1 = ({ onSuccess }) => {
	const toast = useToast()
	const { t } = useTranslation()
	const passwordModal = useDisclosure({})
	const phoneCodeModal = useDisclosure({})

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm()

	useEffect(() => {
		realsync.register('setup/error', (error) => {
			toast({ status: 'error', title: error })
		})

		realsync.register('setup/phoneCode', () => {
			phoneCodeModal.onOpen()

			return new Promise((resolve) => {
				Emitter.on('setup/phoneCode', (data) => {
					resolve(data)
					phoneCodeModal.onClose()
				})
			})
		})

		realsync.register('setup/password', () => {
			passwordModal.onOpen()

			return new Promise((resolve) => {
				Emitter.on('setup/password', (data) => {
					resolve(data)
					passwordModal.onClose()
				})
			})
		})
	}, [])

	const VerifyCreds = async (creds) => {
		try {
			let profile = await realsync.service('auth/verify', creds)
			if (profile) onSuccess(JSON.parse(profile))
		} catch (e) {}
	}

	return (
		<Box>
			<SetupPassword {...passwordModal} />
			<SetupPhoneCode {...phoneCodeModal} />

			<form onSubmit={handleSubmit(VerifyCreds)}>
				<Stack mt={8} spacing={6}>
					<FormControl>
						<FormLabel>{t('setup.apiId')}</FormLabel>
						<Input
							type='text'
							placeholder='482005'
							variant='flushed'
							_focus={{ borderColor: 'brand.500', borderBottomWidth: '2px' }}
							{...register('apiId')}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>{t('setup.apiHash')}</FormLabel>
						<Input
							type='text'
							placeholder='23b6f50fb1f824e9643ee459828e4bcc'
							variant='flushed'
							_focus={{ borderColor: 'brand.500', borderBottomWidth: '2px' }}
							{...register('apiHash')}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>{t('setup.phoneNumber')}</FormLabel>
						<Input
							type='text'
							placeholder='+9170XXX35XX8'
							variant='flushed'
							_focus={{ borderColor: 'brand.500', borderBottomWidth: '2px' }}
							{...register('phoneNumber')}
						/>
					</FormControl>
					<Flex>
						<Spacer />
						<Button
							type='submit'
							isLoading={isSubmitting}
							leftIcon={<FiCheck />}
						>
							{t('common.submit')}
						</Button>
					</Flex>
				</Stack>
			</form>
		</Box>
	)
}

export default Step1
