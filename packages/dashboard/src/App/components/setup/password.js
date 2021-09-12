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

const SetupPassword = ({ isOpen, onClose }) => {
	const password = useRef(null)

	const EmitPassword = () => {
		Emitter.emit('setup/password', password.current.value)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Enter your Password</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Input type='password' variant='flushed' ref={password} />
				</ModalBody>

				<ModalFooter>
					<Button variant='ghost' onClick={EmitPassword}>
						Verify
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default SetupPassword
