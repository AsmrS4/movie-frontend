import type { EditUserModel } from '@shared/models/UserModel'
import { instanceWithAuthorization } from '@utils/api/axios.config'

export const fetchProfile = async () => {
	try {
		const response = await instanceWithAuthorization.get('/user/me')
		return response.data
	} catch (error) {
		throw new Error('Что-то пошло не так')
	}
}

export const editProfile = async (form: EditUserModel) => {
	try {
		const response = await instanceWithAuthorization.put('/user/me', {
			...form
		})
		return response.data
	} catch (error) {
		throw new Error('Что-то пошло не так')
	}
}
