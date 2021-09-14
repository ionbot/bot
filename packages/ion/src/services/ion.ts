import { Client } from '@realsync/server'
import { GetConfig, SetConfig } from '../providers/config'
import ion from '../providers/ion'

export const LoadedModules = () => {
	const modules = ion.getLoadedModules()
	return modules
}

export const SaveModConfig = async (
	client: Client,
	module: string,
	config: any
) => {
	await SetConfig(`mod-${module}`, config)
	return
}

export const LoadModConfig = async (client: Client, module: string) => {
	const modConf = await GetConfig(`mod-${module}`)
	return modConf
}
