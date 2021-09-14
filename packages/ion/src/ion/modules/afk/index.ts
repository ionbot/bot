import { Meta } from '..'
import { AfkHandler } from './handler'

const meta: Meta = {
	id: 'afk',
	pattern: /afk (.*)/,
	scope: 'all',
	mode: 'all',

	fields: {},
}

export default { meta, handler: AfkHandler }
