import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import { languages } from './config/languages'

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		fallbackLng: ['en', 'es'],
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['querystring', 'localStorage'],
			caches: ['localStorage'],
		},
		backend: {
			loadPath: '/locales/{{lng}}.json',
		},
	})

i18n.on('languageChanged', (lng) => {
	const lang = languages[lng]
	document.documentElement.setAttribute('lang', lng)
	if (lang.rtl) {
		document.documentElement.setAttribute('dir', 'rtl')
	} else {
		document.documentElement.setAttribute('dir', 'ltr')
	}
})

export default i18n
