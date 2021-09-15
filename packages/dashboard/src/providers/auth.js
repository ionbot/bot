import { useEffect, useState } from 'react'
import { Center } from '@chakra-ui/layout'
import { IonLoader } from '../components/common/loading'
import Setup from '../App/Setup'
import realsync from './realsync'
import { useTranslation } from 'react-i18next'
import { UserStore } from '../store/user'

const AuthProvider = ({ children }) => {
	const [profile, setProfile] = useState({ loading: true })
	const { t } = useTranslation()

	const FetchProfile = () => {
		realsync
			.service('user/profile')
			.then(async (userProfile) => {
				if (userProfile) {
					userProfile = JSON.parse(userProfile)
					setProfile({ ...userProfile })

					const version = await realsync.service('ion/version')
					const stats = await realsync.service('ion/stats')
					console.log('stats', stats)

					UserStore.update((s) => {
						s.profile = userProfile
						s.ionVersion = version
					})
				}
			})
			.catch((err) => {
				if (err.includes('ION_NOT_SETUP')) {
					setProfile({ loading: false })
				}
			})
	}

	useEffect(() => {
		FetchProfile()
	}, [])

	if (profile.loading) {
		return (
			<Center mt={{ base: 12, lg: 24 }}>
				<IonLoader title={t('auth.fetchProfile')} />
			</Center>
		)
	}

	if (profile.self) {
		return children
	}

	return <Setup />
}

export default AuthProvider
