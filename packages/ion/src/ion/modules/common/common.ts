import { Api } from 'telegram'
import { ModuleHandler } from '../../handlers/Module'

export const Source = new ModuleHandler(
	async (client, event) => {
		event.message.delete({})

		await client.invoke(
			new Api.messages.SendMessage({
				peer: event.chatId,
				message: 'GitHub Source: https://github.com/ionbot/bot/',
				noWebpage: true,
			})
		)
	},
	{ commands: ['source'] }
)
