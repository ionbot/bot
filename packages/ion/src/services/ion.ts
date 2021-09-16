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

let stats: any = {}
export const IonStats = async () => {
	if (stats.blockedUsers) {
		return stats
	}

	const totalBlocked: any = await ion.client?.invoke(
		new Api.contacts.GetBlocked({})
	)
	stats.blockedUsers = totalBlocked?.count || 0

	const inActiveChannels = await ion.client?.invoke(
		new Api.channels.GetInactiveChannels()
	)
	stats.inActiveChannels = inActiveChannels

	const result = await ion.client?.invoke(
		new Api.messages.GetAllChats({
			exceptIds: [],
		})
	)
	stats.totalChats = result?.chats.length

	return stats
}
