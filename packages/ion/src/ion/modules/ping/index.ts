import { Meta } from '..'
import { PingHandler } from './handler'

const meta: Meta = {
	id: 'ping',
	commands: 'ping',
	scope: 'group',
	mode: 'outgoing',

	fields: {
		displayLatency: {
			type: 'switch',
			required: false,
		},
	},
}

export default { meta, handler: PingHandler }
