import { Meta } from '..'
import SpamHandler from './spam'

const meta: Meta = {
	id: 'spam',
	examples: ['.spam 4 hello world'],
	fields: {
		waitBeforeSend: {
			type: 'slider',
			min: 0.1,
			max: 2,
		},
	},
}

export default { meta, handlers: [SpamHandler] }
