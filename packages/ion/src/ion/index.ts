import { TelegramClient } from 'telegram'
import { Logger } from 'telegram'
import { NewMessage, NewMessageEvent } from 'telegram/events'
import logger from '../logger'
import { getUserCreds } from '../utils/getUserCred'
import allModules, { Meta } from './modules'

const { version } = require('../../package.json')
const { NODE_ENV } = process.env
const defaultPrefixe = '.'

if (NODE_ENV !== 'dev') {
	Logger.setLevel('none')
}

class Ion {
	private client?: TelegramClient
	private prefix: string = defaultPrefixe

	loadedModules: Meta[] = []
	isRunning: Boolean = false

	match(event: NewMessageEvent, commands: string | string[]): boolean {
		const message = event.message.message

		if (!message) {
			return false
		}

		commands = Array.isArray(commands) ? commands : [commands]

		const prefix = this.prefix

		if (message.startsWith(prefix)) {
			for (let k in commands) {
				const command = commands[k]
				const withoutPrefix = message.slice(1, message.length)

				if (withoutPrefix.match(new RegExp(`^(?:${command})(?:\\s|$)`))) {
					return true
				}
			}
		}

		return false
	}

	async init() {
		const { apiId, apiHash, session } = await getUserCreds()
		if (apiId && apiHash && session) {
			this.client = new TelegramClient(session, apiId, apiHash, {
				connectionRetries: 5,
			})

			logger.info(`initialising ion ${version}`)

			// start bot
			await this.client.start({ botAuthToken: '' })
			this.isRunning = true

			allModules.map((module) => {
				const { meta, handler } = module
				const mode = {
					outgoing: meta.mode === 'outgoing',
					icoming: meta.mode === 'incoming',
				}

				this.loadedModules.push(meta)

				this.client?.addEventHandler(
					async (event: NewMessageEvent) => {
						// attach handler to the module
						handler(this.client as TelegramClient, event)
					},
					new NewMessage({
						...mode,
						func: (event) => {
							// validate conditions
							let match = false

							if (meta.pattern) {
								match = Boolean(event.message.message?.match(meta.pattern))
							} else if (meta.commands) {
								match = this.match(event, meta.commands)
							}

							return match
						},
					})
				)
			})
		}
	}

	async getProfile() {
		if (!this.client || !this.isRunning) {
			throw new Error('ION_NOT_SETUP')
		}
		const profile = await this.client?.getMe()
		return profile
	}

	async getLoadedModules() {
		return this.loadedModules
	}
}

export { Ion }
