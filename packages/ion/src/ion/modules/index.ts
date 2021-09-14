import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'
import afk from './afk'
import ping from './ping'
import shortlink from './shortlink'

export interface Meta {
	id: string
	fields: any

	commands?: string | string[]
	pattern?: RegExp
	scope?: 'all' | 'group' | 'private' | 'channel'
	mode?: 'all' | 'outgoing' | 'incoming'

	examples?: any[]
}

interface Module {
	meta: Meta
	handler: (client: TelegramClient, event: NewMessageEvent, config?: any) => any
}

let allModules: Module[] = [ping, afk, shortlink]
export default allModules
