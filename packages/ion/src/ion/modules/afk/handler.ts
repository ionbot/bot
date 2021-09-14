import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'

export const AfkHandler = (client: TelegramClient, event: NewMessageEvent) => {
	console.log(event.message)
}
