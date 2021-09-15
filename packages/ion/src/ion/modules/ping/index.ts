import { Meta } from '..'
import { PingHandler } from './ping'

const meta: Meta = {
	id: 'ping',

	fields: {
		displayLatency: {
			type: 'switch',
			required: false,
		},
	},

	examples: ['.ping'],
}

export default { meta, handlers: [PingHandler] }
