import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'
import { IonModuleHandler } from '../handlers/Module'
import afk from './afk'
import ping from './ping'
import shortlink from './shortlink'

export interface Meta {
	id: string
	fields: any
	examples?: any[]
}

interface IonModule {
	meta: Meta
	handlers: IonModuleHandler[]
}

let allModules: IonModule[] = [ping, shortlink, afk]
export default allModules
