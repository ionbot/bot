import { Box, Heading } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'

const Home = () => {
	const { t } = useTranslation()
	return (
		<Box>
			<Heading>{t('common.home')}</Heading>
		</Box>
	)
}

export default Home
