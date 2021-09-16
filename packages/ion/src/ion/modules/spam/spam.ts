import { Api } from 'telegram'
import { ModuleHandler } from '../../handlers/Module'

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

const Spam = new ModuleHandler(
	async (client, event, extras) => {
		const { waitBeforeSend = 0.3 } = extras.config
		const [, count, text] = extras.match

		await event.message.delete({})

		for (let i = 0; i < count; i++) {
			await sleep(waitBeforeSend * 1000)
			await client.invoke(
				new Api.messages.SendMessage({
					peer: event.chatId,
					message: text,
				})
			)
		}
	},
	{
		pattern: /spam (\w+) ([\s\S]+)/,
	}
)

export default Spam
