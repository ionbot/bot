import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Heading,
	Text,
	Divider,
} from '@chakra-ui/react'
// import { useTranslation } from 'react-i18next'
import { FiSave } from 'react-icons/fi'

export const ModuleEditor = ({ onClose, isOpen, module }) => {
	// const { t } = useTranslation()

	return (
		<Drawer
			blockScrollOnMount
			isOpen={isOpen}
			placement='right'
			onClose={onClose}
			size='lg'
		>
			<DrawerOverlay />
			<DrawerContent bg='gray.50' textColor='gray.500'>
				<DrawerCloseButton />
				<DrawerHeader>
					<Heading size='lg'>{module.name}</Heading>
					<Text fontSize='md'>{module.info}</Text>
				</DrawerHeader>

				<Divider />

				<DrawerBody></DrawerBody>

				<DrawerFooter>
					<Button onClick={onClose} leftIcon={<FiSave />} variant='outline'>
						Save
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
