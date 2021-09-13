import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { FiHome, FiPackage, FiSettings } from 'react-icons/fi'

import { UserStore } from '../../store/user'
import { useTranslation } from 'react-i18next'

export const AppSidebar = ({ active }) => {
	const { t } = useTranslation()
	const ionVersion = UserStore.useState((s) => s.ionVersion)

	const SidebarItems = {
		home: {
			name: t('common.home'),
			icon: <FiHome />,
			color: 'brand.300',
		},
		modules: {
			name: t('common.modules'),
			icon: <FiPackage />,
			color: 'purple.300',
		},
		settings: {
			name: t('common.settings'),
			icon: <FiSettings />,
			color: 'red.300',
		},
	}
	const itemKeys = Object.keys(SidebarItems)
	return (
		<Box h='100vh' shadow='lg'>
			<VStack userSelect='none' spacing={12} py={8}>
				{itemKeys.map((key, idx) => {
					const item = SidebarItems[key]
					const activeColor = active === key ? item.color : 'gray.500'

					return (
						<Link to={`/${key}`} key={key}>
							<VStack
								alignItems='center'
								transition='color 200ms'
								_hover={{ textColor: item.color }}
								cursor='pointer'
								textColor={activeColor}
							>
								<Box fontSize='5xl'>{item.icon}</Box>
								<Heading size='md'>{item.name}</Heading>
							</VStack>
						</Link>
					)
				})}
				<Text textColor='gray.500'>Ion v{ionVersion}</Text>
			</VStack>
		</Box>
	)
}
