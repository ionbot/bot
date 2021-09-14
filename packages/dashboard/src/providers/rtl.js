import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'
import i18next from 'i18next'

import { languages } from '../config/languages'

const options = {
	rtl: { key: 'css-ar', stylisPlugins: [rtl] },
	ltr: { key: 'css-en' },
}

export const RtlProvider = ({ children }) => {
	const { language } = i18next
	const lang = languages[language]
	let dir = 'ltr'

	if (lang && lang.rtl) {
		dir = 'rtl'
	}

	const cache = createCache(options[dir])
	return <CacheProvider value={cache} children={children} />
}
