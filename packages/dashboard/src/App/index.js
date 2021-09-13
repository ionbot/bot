import { Box, Flex } from '@chakra-ui/react'
import { AppSidebar } from '../components/app/sidebar'
import { Switch, Route, withRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './views/Home'
import Modules from './views/Modules'
import Settings from './views/Settings'

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
							<Route path='/' exact component={Home} />
							<Route path='/home' component={Home} />
							<Route path='/modules' component={Modules} />
							<Route path='/settings' component={Settings} />
						</Switch>
					</AnimatePresence>
				</Box>
			</Flex>
		</Box>
	)
}

export default withRouter(App)
