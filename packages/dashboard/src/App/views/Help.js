import { Box, Divider, Heading, Stack } from '@chakra-ui/layout'
import { FiGitPullRequest } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

import { IonContributor } from '../../components/common/contributors'
import { IonCard } from '../../components/common/card'

const Help = () => {
	const { t } = useTranslation()
	return (
		<Box>
			<Heading>{t('common.help')}</Heading>

			<Stack mt={8} spacing={8}>
				{/* Contributors */}
				<IonCard
					title={t('settings.contributors')}
					subTitle={t('settings.contributorsInfo')}
					icon={<FiGitPullRequest />}
					color='orange'
				>
					<IonContributor />
				</IonCard>

				<Divider />
			</Stack>
		</Box>
	)
}

export default Help
