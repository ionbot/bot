import { Box, Flex } from '@chakra-ui/react'
import { AppSidebar } from '../components/app/sidebar'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Home from './views/Home'
import Modules from './views/Modules'
import Settings from './views/Settings'
import Help from './views/Help'
import Tools from './views/Tools'

const Views = {
	'/': () => <Redirect to='/home' />,
	'/home': Home,
	'/modules': Modules,
	'/tools': Tools,
	'/help': Help,
	'/settings': Settings,
}

const App = (props) => {
	const { pathname } = props.location

	return (
		<Flex>
			<Box
				w={{ base: '32', md: '44' }}
				h='100vh'
				overflow='auto'
				shadow='md'
				css={{
					'&::-webkit-scrollbar': {
						width: '0px',
					},
					'&::-webkit-scrollbar-track': {
						width: '0px',
					},
					'&::-webkit-scrollbar-thumb': {
						borderRadius: '0px',
					},
				}}
			>
				<AppSidebar active={pathname.replace(/\//, '')} />
			</Box>

			<Box w='full' p={4} h='100vh' textColor='gray.500' overflow='auto'>
				<AnimatePresence exitBeforeEnter initial={false}>
					<Switch location={props.location} key={pathname}>
						{Object.keys(Views).map((route) => (
							<Route
								key={route}
								path={route}
								exact
								component={(props) => {
									const View = Views[route]
									return (
										<motion.div
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.3 }}
										>
											<View {...props} />
										</motion.div>
									)
								}}
							/>
						))}
					</Switch>
				</AnimatePresence>
			</Box>
		</Flex>
	)
}

export default withRouter(App)
