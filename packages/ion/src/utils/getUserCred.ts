import { StringSession } from 'telegram/sessions'
import { GetConfig } from '../providers/config'

export const getUserCreds = async () => {
	// get values from database
	let apiId = await GetConfig('__apiId')
	const apiHash = await GetConfig('__apiHash')
	const sessionString = await GetConfig('__session')

	if (!apiId || !apiHash || !sessionString) {
		return { apiId: '', apiHash: '', session: '' }
	}

	apiId = Number(apiId)

	const session = new StringSession(sessionString)
	return { apiId, apiHash, session }
}
