import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'
import ping from './ping'

export interface Meta {
	id: string
	fields: any

	commands?: string | string[]
	pattern?: RegExp
	scope?: 'all' | 'group' | 'private' | 'channel'
	mode?: 'all' | 'outgoing' | 'incoming'
}

interface Module {
	meta: Meta
	handler: (client: TelegramClient, event: NewMessageEvent) => any
}

let allModules: Module[] = [ping]
export default allModules
