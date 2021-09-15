import { Meta } from '..'
import handlers from './afk'

const meta: Meta = {
	id: 'afk',
	fields: {
		afkMessage: {
			type: 'text',
			hint: 'My boss is AFK because {{reason}}',
		},
	},
}

export default { meta, handlers }
