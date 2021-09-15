import { Meta } from '..'
import { ShortHandler } from './shortlink'

const meta: Meta = {
	id: 'shortlink',
	fields: {},
	examples: ['.short ionbot.site'],
}

export default { meta, handlers: [ShortHandler] }
