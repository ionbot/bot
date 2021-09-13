import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import './i18n'
import 'focus-visible'
import AuthProvider from './providers/auth'
import App from './App'

import theme from './config/theme'

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</ChakraProvider>,
	document.getElementById('root')
)
