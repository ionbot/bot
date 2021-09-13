import { Box, Flex } from '@chakra-ui/react'
import { AppSidebar } from '../components/app/sidebar'
import { Switch, Route, withRouter } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Home from './views/Home'
import Modules from './views/Modules'
import Settings from './views/Settings'

const Views = {
	'/': Home,
	'/home': Home,
	'/modules': Modules,
	'/settings': Settings,
}

const App = (props) => {
	const { pathname } = props.location

	return (
		<Box h='100vh'>
			<Flex w='full'>
				<Box w={{ base: '32', md: '44' }}>
					<AppSidebar active={pathname.replace(/\//, '')} />
				</Box>
				<Box w='full' p={4} h='100vh' textColor='gray.500'>
					<AnimatePresence exitBeforeEnter initial={false}>
						<Switch location={props.location} key={pathname}>
							{Object.keys(Views).map((route) => (
								<Route
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
		</Box>
	)
}

export default withRouter(App)
