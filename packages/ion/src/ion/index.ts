import { TelegramClient } from 'telegram'
import { getUserCreds } from '../utils/getUserCred'
class Ion {
	private client?: TelegramClient

	constructor() {
		// initiate Ion
		this.init()
	}

	async init() {
		const { apiId, apiHash, session } = await getUserCreds()

		this.client = new TelegramClient(session, apiId, apiHash, {
			connectionRetries: 5,
		})

		this.client.start({ botAuthToken: '' })
	}

	async getProfile() {
		if (!this.client) {
			throw new Error('ION_NOT_SETUP')
		}
		const profile = await this.client?.getMe()
		return profile
	}
}

export { Ion }
