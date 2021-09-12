import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import 'focus-visible'
import AuthProvider from './providers/auth'
import App from './App'

import theme from './config/theme'

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<AuthProvider>
			<App />
		</AuthProvider>
	</ChakraProvider>,
	document.getElementById('root')
)
