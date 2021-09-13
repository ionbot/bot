import { ConfigModel } from '../models/config'

export const SetConfig = async (key: string, value: any) => {
	try {
		const response = await ConfigModel.create({ key, value })
		return response
	} catch (e: any) {
		if (e.code === 11000) {
			const response = await ConfigModel.findOneAndUpdate({ key }, { value })
			return response
		}
	}
}
export const GetConfig = () => {}
