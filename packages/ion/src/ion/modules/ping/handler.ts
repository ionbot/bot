import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'
import { GetConfig } from '../../../providers/config'

const { version } = require('../../../../package.json')

export const PingHandler = async (
	client: TelegramClient,
	event: NewMessageEvent
) => {
	let moduleConfig = await GetConfig(`mod-ping`)
	const { displayLatency } = moduleConfig

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
}
