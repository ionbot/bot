import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'

import { ModuleHandler } from '../../handlers/Module'
import { GetConfig } from '../../../providers/config'
const { version } = require('../../../../package.json')

export const PingHandler = new ModuleHandler(
	async (client: TelegramClient, event: NewMessageEvent, extras) => {
		const { displayLatency } = extras.config

		const time = Date.now()
		await event.message.edit({ text: '...' })

		const diff = Date.now() - time

		const latency = `🕔 Latency: **${
			diff / 2 // haha
		}ms**\n`

		let text = `🔥 Ion v${version} is up and running.\n`

		if (displayLatency) text += latency

		await event.message.edit({
			text,
			parseMode: 'markdown',
		})
	},
	{ commands: 'ping' }
)
