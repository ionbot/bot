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
	SimpleGrid,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FiCloud, FiCode, FiSave } from 'react-icons/fi'
import { IonCard } from '../../../components/common/card'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ModuleFields } from '../../../components/modules/fields'

export const ModuleEditor = ({ onClose, isOpen, module }) => {
	const { t } = useTranslation()

	let commands = module.commands
	const scope = t(`scope.${module.scope}`)

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

				<DrawerBody>
					<SimpleGrid columns={{ base: 1, md: 2 }}>
						<IonCard
							title='Command'
							subTitle={commands}
							icon={<FiCode />}
							color='red'
						/>
						<IonCard
							title='Scope'
							subTitle={scope}
							icon={<FiCloud />}
							color='purple'
						/>
					</SimpleGrid>

					<Tabs mt={4} variant='soft-rounded' colorScheme='gray'>
						<TabList>
							<Tab>{t('common.config')}</Tab>
							<Tab>{t('common.example')}</Tab>
						</TabList>

						<TabPanels mt={4}>
							<TabPanel>
								<ModuleFields fields={module.fields} module={module.id} />
							</TabPanel>
							<TabPanel>Coming soon</TabPanel>
						</TabPanels>
					</Tabs>
				</DrawerBody>

				<DrawerFooter>
					<Button onClick={onClose} leftIcon={<FiSave />} variant='outline'>
						Save
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
