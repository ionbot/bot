import axios from 'axios'
import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'
import logger from '../../../logger'
import { ModuleHandler } from '../../handlers/Module'

export const ShortHandler = new ModuleHandler(
	async (client: TelegramClient, event: NewMessageEvent, extras) => {
		const [, link] = extras.match
		await event.message.edit({ text: '🚀 hold on...' })
		try {
			const { data } = await axios.get(
				`https://api.shrtco.de/v2/shorten?url=${link}`
			)
			event.message.edit({ text: data.result.short_link })
		} catch (e: any) {
			if (e.response) {
				const { error } = e.response.data

				event.message.edit({ text: `Error: ${error}` })
			} else {
				logger.error(e.toString())
				event.message.edit({ text: 'An error occurred' })
			}
		}
	},
	{
		pattern: /short (.*)/,
		scope: 'all',
		mode: 'outgoing',
	}
)
