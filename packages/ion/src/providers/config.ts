import { ConfigModel } from '../models/config'

export const SetConfig = async (key: string, value: any) => {
	try {
		const response = await ConfigModel.create({ key, value })
		return response || {}
	} catch (err: any) {
		if (err.code === 11000) {
			const response = await ConfigModel.findOneAndUpdate({ key }, { value })
			return response
		} else {
			console.error(err)
		}
	}
}
export const GetConfig = async (key: string): Promise<any> => {
	const config = await ConfigModel.findOne({ key })
	return config ? config.value : null
}
