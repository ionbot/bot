import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/layout'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { FiGlobe } from 'react-icons/fi'
import { IonCard } from '../../components/common/card'
import { languages } from '../../config/languages'

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
					<Flex userSelect='none' spacing={8} flexFlow='wrap'>
						{languages.map((lang) => {
							return (
								<Box
									mr={6}
									mt={4}
									key={lang.code}
									cursor='pointer'
									// borderColor={language === lang && 'brand.400'}
									textColor={language === lang.code && 'brand.300'}
									rounded='xl'
									onClick={() => i18next.changeLanguage(lang.code)}
									transition='color 0.6s'
								>
									<Heading size='md' d='flex' alignItems='center'>
										{lang.name}
									</Heading>
								</Box>
							)
						})}
					</Flex>
				</IonCard>

				<Divider />
			</Stack>
		</>
	)
}

export default Settings
