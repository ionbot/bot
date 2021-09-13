import { Box, Heading, HStack, Stack } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { FiGlobe } from 'react-icons/fi'
import { IonCard } from '../../components/common/card'

const Settings = () => {
	const { t } = useTranslation()
	let { languages, language } = i18next

	languages = languages.filter((lang) => lang !== 'dev') // removes dev lang

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
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
								>
									<Heading size='md'>{lang}</Heading>
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
