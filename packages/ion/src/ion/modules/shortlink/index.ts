import { Meta } from '..'
import { ShortHandler } from './handler'

const meta: Meta = {
	id: 'shortlink',
	pattern: /short (.*)/,
	scope: 'all',
	mode: 'outgoing',

	fields: {},
	examples: ['.short ionbot.site'],
}

export default { meta, handler: ShortHandler }
