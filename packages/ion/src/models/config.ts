import { Schema, model } from 'mongoose'

interface IConfig {
	key: string
	value: any
}

const schema = new Schema<IConfig>({
	key: {
		type: String,
		unique: true,
	},
	value: {
		type: Schema.Types.Mixed,
	},
})

export const ConfigModel = model<IConfig>('Config', schema)
