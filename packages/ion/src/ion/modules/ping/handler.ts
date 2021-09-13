import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'

export const PingHandler = async (
	client: TelegramClient,
	event: NewMessageEvent
) => {
	await event.message.edit({
		text: 'Pong',
	})
}
