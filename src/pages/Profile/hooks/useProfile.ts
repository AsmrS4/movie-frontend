import { useEffect, useState } from 'react'
import { fetchProfile } from '../api/profile'
import type { UserModel } from '@shared/models/UserModel'

export const useProfile = () => {
	const [profile, setProfile] = useState<UserModel>({
		id: '',
		firstName: null,
		lastName: null,
		login: '',
		imageUrl: null,
		createTime: ''
	})
	const [isLoading, setIsLoading] = useState<boolean>(false)
	useEffect(() => {
		;(async () => {
			setProfile(await fetchProfile())
		})()
	}, [])
	return { profile, isLoading, setProfile }
}
