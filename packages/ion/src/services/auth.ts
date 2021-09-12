import { Client } from '@realsync/server'
import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
interface Credentials {
	apiId: number
	apiHash: string
	phoneNumber: string
}

export const AuthService = async (client: Client, credentials: Credentials) => {
	const { apiId, apiHash, phoneNumber } = credentials
	const stringSession = new StringSession('')

	const telegramClient = new TelegramClient(
		stringSession,
		Number(apiId),
		apiHash,
		{
			connectionRetries: 5,
		}
	)

	await telegramClient.start({
		phoneNumber: async () => phoneNumber,
		password: async () => await client.run('setup/password'),
		phoneCode: async () => await client.run('setup/phoneCode'),
		onError: (err) => client.run('setup/error', err.toString()),
	})

	console.log('session', await telegramClient.session.save())
}
