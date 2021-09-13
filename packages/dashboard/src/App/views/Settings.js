import { Box, Heading, HStack, Stack } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { FiGlobe } from 'react-icons/fi'
import { IonCard } from '../../components/common/card'

const languages = ['en', 'es']

const Settings = () => {
	const { t } = useTranslation()
	let { language } = i18next

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
		>
			<Heading>Settings</Heading>
			<Stack mt={8}>
				<IonCard
					title={t('settings.language')}
					subTitle={t('settings.languageInfo')}
					icon={<FiGlobe />}
					color='green'
				>
					<HStack userSelect='none'>
						{languages.map((lang) => {
							return (
								<Box
									key={lang}
									p={4}
									cursor='pointer'
									// borderColor={language === lang && 'brand.400'}
									textColor={language === lang && 'brand.300'}
									rounded='xl'
									width='60px'
									textAlign='center'
									onClick={() => i18next.changeLanguage(lang)}
								>
									<Heading size='md' d='flex' alignItems='center'>
										{lang}
									</Heading>
								</Box>
							)
						})}
					</HStack>
				</IonCard>
			</Stack>
		</motion.div>
	)
}

export default Settings
