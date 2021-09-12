import { Client } from '@realsync/server'
import { Api, TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
interface Credentials {
	apiId: number
	apiHash: string
	phoneNumber: string
}

export const AuthService = async (client: Client, credentials: Credentials) => {
	console.log('credentials', credentials)
	const { apiId, apiHash, phoneNumber } = credentials
	const stringSession = new StringSession('')

	// const telegramClient = new TelegramClient(stringSession, apiId, apiHash, {
	// 	connectionRetries: 5,
	// })

	// const password = await client.run('setup/password', {})
	// client.run('setup/error', 'Invalid Password')

	// const session = await telegramClient.start({
	// 	phoneNumber: async () => phoneNumber,
	// 	password: async () => {
	// 		const password = await client.run('setup/password')
	// 		return password
	// 	},
	// 	phoneCode: async () => phoneNumber,
	// 	onError: (err) => client.run('setup/error', err.toString()),
	// })

	// console.log('session', session)
}
