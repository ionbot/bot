import { Client } from '@realsync/server'
import { Api } from 'telegram'
import { GetConfig, SetConfig } from '../providers/config'
import ion from '../providers/ion'

export const LoadedModules = () => {
	const modules = ion.getLoadedModules()
	return modules
}

export const SaveModConfig = async (
	client: Client,
	module: string,
	config: {
		name: string
		value: any
	}
) => {
	const final = await GetConfig(`mod-${module}`)
	final[config.name] = config.value

	await SetConfig(`mod-${module}`, final)
	return
}

export const LoadModConfig = async (client: Client, module: string) => {
	const modConf = await GetConfig(`mod-${module}`)
	return modConf
}

export const IonStats = async () => {
	const totalBanned: any = await ion.client?.invoke(
		new Api.contacts.GetBlocked({})
	)

	console.log('toalChannels', toalChannels)

	return totalBanned?.count
}

setTimeout(IonStats, 2000)
