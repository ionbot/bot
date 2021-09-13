import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'
const { version } = require('../../../../package.json')

export const PingHandler = async (
	client: TelegramClient,
	event: NewMessageEvent
) => {
	const time = Date.now()
	await event.message.edit({ text: '...' })

	const diff = Date.now() - time

	const latency = `🕔 Latency: **${
		diff / 2 // haha
	}ms**\n`

	let text = `🔥 Ion v${version} is up and running.\n`

	text += latency

	await event.message.edit({
		text,
		parseMode: 'markdown',
	})
}
