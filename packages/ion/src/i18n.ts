import { I18n } from 'i18n'
import path from 'path'

const i18n = new I18n()
i18n.configure({
	defaultLocale: 'en',
	locales: ['en'],
	objectNotation: true,
	directory: path.join(__dirname, '..', 'locales'),
	updateFiles: false,
})

export default i18n
