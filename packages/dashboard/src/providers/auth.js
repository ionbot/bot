import { useEffect, useState } from 'react'
import { Center } from '@chakra-ui/layout'
import { IonLoader } from '../components/common/loading'
import Setup from '../Setup'
import realsync from './realsync'
import { useTranslation } from 'react-i18next'
import { UserStore } from '../store/user'

const AuthProvider = ({ children }) => {
	const [profile, setProfile] = useState({ loading: true })
	const { t } = useTranslation()

	const FetchProfile = () => {
		realsync
			.service('user/profile')
			.then((userProfile) => {
				if (userProfile) {
					userProfile = JSON.parse(userProfile)
					setProfile({ ...userProfile })

					UserStore.update((s) => {
						s.profile = userProfile
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
