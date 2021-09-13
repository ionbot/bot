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

import realsync from '../../providers/realsync'
import Emitter from '../../providers/eventemitter'

import SetupPassword from '../components/setup/Password'
import SetupPhoneCode from '../components/setup/PhoneCode'

const Step1 = () => {
	const toast = useToast()
	const passwordModal = useDisclosure({})
	const phoneCodeModal = useDisclosure({})

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm()

	useEffect(() => {
		realsync.register('setup/error', (error) => {
			console.log('error', error)
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
		await realsync.service('auth/verify', creds)
		return
	}

	return (
		<Box>
			<SetupPassword {...passwordModal} />
			<SetupPhoneCode {...phoneCodeModal} />

			<form onSubmit={handleSubmit(VerifyCreds)}>
				<Stack mt={8} spacing={6}>
					<FormControl>
						<FormLabel>API ID</FormLabel>
						<Input
							type='text'
							placeholder='482005'
							variant='flushed'
							_focus={{ borderColor: 'brand.500', borderBottomWidth: '2px' }}
							{...register('apiId')}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>API Hash</FormLabel>
						<Input
							type='text'
							placeholder='23b6f50fb1f824e9643ee459828e4bcc'
							variant='flushed'
							_focus={{ borderColor: 'brand.500', borderBottomWidth: '2px' }}
							{...register('apiHash')}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Phone Number</FormLabel>
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
							Continue
						</Button>
					</Flex>
				</Stack>
			</form>
		</Box>
	)
}

export default Step1
