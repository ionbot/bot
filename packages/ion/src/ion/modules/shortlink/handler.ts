import axios from 'axios'
import { TelegramClient } from 'telegram'
import { NewMessageEvent } from 'telegram/events'
import logger from '../../../logger'
// import { GetConfig } from '../../../providers/config'

export const ShortHandler = async (
	client: TelegramClient,
	event: NewMessageEvent,
	match: any
) => {
	const [, link] = match
	// let moduleConfig = await GetConfig(`mod-ping`)
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
}
