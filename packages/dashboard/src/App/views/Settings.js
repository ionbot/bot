import { Box, Divider, Heading, HStack, Stack } from '@chakra-ui/layout'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { FiGlobe } from 'react-icons/fi'
import { IonCard } from '../../components/common/card'

const languages = [
	{ code: 'en', name: 'English' },
	{
		code: 'es',
		name: 'Spanish',
	},
	{
		code: 'ckb',
		name: 'Central Kurdish',
		rtl: true,
	},
]

const Settings = () => {
	const { t } = useTranslation()
	let { language } = i18next

	return (
		<>
			<Heading>{t('common.settings')}</Heading>

			<Stack mt={8} spacing={8}>
				<IonCard
					title={t('settings.language')}
					subTitle={t('settings.languageInfo')}
					icon={<FiGlobe />}
					color='green'
				>
					<HStack userSelect='none' p={4} spacing={8}>
						{languages.map((lang) => {
							return (
								<Box
									key={lang.code}
									cursor='pointer'
									// borderColor={language === lang && 'brand.400'}
									textColor={language === lang.code && 'brand.300'}
									rounded='xl'
									textAlign='center'
									onClick={() => i18next.changeLanguage(lang.code)}
									transition='color 0.6s'
								>
									<Heading size='md' d='flex' alignItems='center'>
										{lang.name}
									</Heading>
								</Box>
							)
						})}
					</HStack>
				</IonCard>

				<Divider />
			</Stack>
		</>
	)
}

export default Settings
