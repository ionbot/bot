import { useRef } from 'react'
import {
	Input,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import Emitter from '../../../providers/eventemitter'

const SetupPhoneCode = ({ isOpen, onClose }) => {
	const phoneCode = useRef(null)

	const EmitPhoneCode = () => {
		Emitter.emit('setup/phoneCode', phoneCode.current.value)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Enter Phone Code</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Input type='text' variant='flushed' ref={phoneCode} />
				</ModalBody>

				<ModalFooter>
					<Button variant='ghost' onClick={EmitPhoneCode}>
						Verify
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default SetupPhoneCode
