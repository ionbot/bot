import { FiHome, FiPackage, FiSettings } from 'react-icons/fi'

export const SidebarItems = {
	home: {
		name: 'Home',
		icon: <FiHome />,
		color: 'brand.300',
	},
	modules: {
		name: 'Modules',
		icon: <FiPackage />,
		color: 'purple.300',
	},
	settings: {
		name: 'Settings',
		icon: <FiSettings />,
		color: 'red.300',
	},
}
