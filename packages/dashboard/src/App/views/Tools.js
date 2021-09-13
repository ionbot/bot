import { Box, Heading } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'

const Tools = () => {
	const { t } = useTranslation()
	return (
		<Box>
			<Heading>{t('common.tools')}</Heading>
		</Box>
	)
}

export default Tools
