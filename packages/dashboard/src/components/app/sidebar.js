import { Badge, Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import {
	FiHome,
	FiPackage,
	FiSettings,
	FiGrid,
	FiHelpCircle,
} from 'react-icons/fi'

import { UserStore } from '../../store/user'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import realsync from '../../providers/realsync'

export const AppSidebar = ({ active }) => {
	const [socketStatus, setSocketStatus] = useState(realsync.socket.connected)
	const { t } = useTranslation()
	const ionVersion = UserStore.useState((s) => s.ionVersion)

	useEffect(() => {
		realsync.socket.on('disconnect', () => setSocketStatus(false))
		realsync.socket.on('connect', () => setSocketStatus(true))
	}, [])

	const SidebarItems = {
		home: {
			name: t('common.home'),
			icon: <FiHome />,
			color: 'brand.300',
		},
		modules: {
			name: t('common.modules'),
			icon: <FiPackage />,
			color: 'purple.400',
		},
		tools: {
			name: t('common.tools'),
			icon: <FiGrid />,
			color: 'orange.300',
		},
		help: {
			name: t('common.help'),
			icon: <FiHelpCircle />,
			color: 'teal.300',
		},
		settings: {
			name: t('common.settings'),
			icon: <FiSettings />,
			color: 'red.300',
		},
	}

	const itemKeys = Object.keys(SidebarItems)
	return (
		<Box>
			<VStack userSelect='none' spacing={12} py={8}>
				{!socketStatus && (
					<Badge colorScheme='red' rounded='lg'>
						disconnected
					</Badge>
				)}
				{itemKeys.map((key) => {
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
								<Box fontSize={{ base: '3xl', '2xl': '5xl' }}>{item.icon}</Box>
								<Heading d={{ base: 'none', md: 'unset' }} size='md'>
									{item.name}
								</Heading>
							</VStack>
						</Link>
					)
				})}
				<Text textColor='gray.500' textAlign='center'>
					Ion v{ionVersion}
				</Text>
			</VStack>
		</Box>
	)
}
