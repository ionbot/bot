import ion from '../providers/ion'

export const UserProfile = async () => {
	const profile = await ion.getProfile()
	return JSON.stringify(profile)
}
