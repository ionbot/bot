import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import './i18n'
import 'focus-visible'
import AuthProvider from './providers/auth'
import App from './App'

import { SuspenseFallback } from './components/common/suspense'
import theme from './config/theme'
import { RtlProvider } from './providers/rtl'

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<Suspense fallback={<SuspenseFallback />}>
			<AuthProvider>
				<BrowserRouter>
					<RtlProvider>
						<App />
					</RtlProvider>
				</BrowserRouter>
			</AuthProvider>
		</Suspense>
	</ChakraProvider>,
	document.getElementById('root')
)
