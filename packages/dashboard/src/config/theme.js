import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

let theme = extendTheme({
	fonts: {
		heading: 'Rubik',
		body: 'Raleway',
	},
	colors: {
		brand: {
			50: '#e4f1fe',
			100: '#bedcfe',
			200: '#96c6fd',
			300: '#6fb0fb',
			400: '#569ffa',
			500: '#478ff8',
			600: '#4580e9',
			700: '#426ed5',
			800: '#3e5dc2',
			900: '#373da2',
		},
	},
})

theme = extendTheme(
	theme,
	withDefaultColorScheme({
		colorScheme: 'brand',
	})
)

export default theme
