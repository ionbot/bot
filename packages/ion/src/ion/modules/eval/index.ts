import { Meta } from '..'
import handlers from './eval'

const meta: Meta = {
	id: 'eval',
	fields: {},
	examples: ['.eval 232+232', '.eval Math.random()'],
}

export default { meta, handlers }
