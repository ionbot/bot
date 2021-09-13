import { TelegramClient } from 'telegram'
import { getUserCreds } from '../utils/getUserCred'
class Ion {
	private client?: TelegramClient
	isRunning: Boolean = false

	constructor() {
		// initiate Ion
		this.init()
	}

	async init() {
		const { apiId, apiHash, session } = await getUserCreds()
		if (apiId && apiHash && session) {
			this.client = new TelegramClient(session, apiId, apiHash, {
				connectionRetries: 5,
			})
			await this.client.start({ botAuthToken: '' })
			this.isRunning = true
		}
	}

	async getProfile() {
		if (!this.client || !this.isRunning) {
			throw new Error('ION_NOT_SETUP')
		}
		const profile = await this.client?.getMe()
		return profile
	}
}

export { Ion }
