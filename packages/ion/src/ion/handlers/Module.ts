import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'

type Scope = 'all' | 'group' | 'private' | 'channel'

export interface IonHandlerParams {
	commands?: string | string[]
	pattern?: RegExp
	scope?: Scope[] | Scope
	mode?: 'all' | 'outgoing' | 'incoming'
}

type IonHandler = (
	client: TelegramClient,
	event: NewMessageEvent,
	extras: {
		match: any
		config: any
		saveConf: (name: string, value: any) => void
	}
) => void

export interface IonModuleHandler {
	handler: IonHandler
	params: IonHandlerParams
}

class ModuleHandler {
	handler: IonHandler
	params: IonHandlerParams

	constructor(handler: IonHandler, params: IonHandlerParams) {
		if (!params.commands && !params.pattern && !params.scope) {
			throw new Error(
				'You must at least provide one of: commands, pattern and scope'
			)
		}

		this.handler = handler
		this.params = params
	}
}

export { ModuleHandler }
