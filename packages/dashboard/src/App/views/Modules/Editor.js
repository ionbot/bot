import {
	Box,
	Flex,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Heading,
	Text,
	Divider,
	SimpleGrid,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FiCloud, FiCode } from 'react-icons/fi'
import { IonCard } from '../../../components/common/card'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ModuleFields } from '../../../components/modules/fields'

export const ModuleEditor = ({ onClose, isOpen, module }) => {
	const { t } = useTranslation()

	let { commands, examples = [] } = module
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
					<Heading size='lg' fontWeight='normal'>
						{module.name}
					</Heading>
					<Text fontSize='md' fontWeight='normal'>
						{module.info}
					</Text>
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
							<TabPanel>
								<Flex flexWrap='wrap'>
									{examples.map((example, idx) => {
										return (
											<Box
												mr={2}
												mt={2}
												minW='24'
												textAlign='center'
												key={idx}
												p={2}
												rounded='xl'
												fontSize='xl'
												fontFamily='monospace'
												borderWidth='1px'
												shadow='md'
											>
												{example}
											</Box>
										)
									})}
								</Flex>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</DrawerBody>

				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
