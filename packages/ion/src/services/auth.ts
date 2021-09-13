import { Client } from '@realsync/server'
import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
import { SetConfig } from '../providers/config'
interface Credentials {
	apiId: number
	apiHash: string
	phoneNumber: string
}

export const AuthService = async (client: Client, credentials: Credentials) => {
	const { apiId, apiHash, phoneNumber } = credentials
	const stringSession = new StringSession('')

	try {
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
			onError: (err) => {
				// WARN: This Function Executes Infinitely
				// client.run('setup/error', err.toString())
			},
		})

		const session = await telegramClient.session.save()

		// save all the values in the database
		await SetConfig('__session', session)
		await SetConfig('__apiId', String(apiId))
		await SetConfig('__apiHash', apiHash)

		const self: any = await telegramClient.getMe()

		return JSON.stringify(self)
	} catch (err: any) {
		await client.run('setup/error', err.toString())
		return
	}
}
