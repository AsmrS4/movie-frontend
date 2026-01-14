import { instanceWithAuthorization } from '@utils/api/axios.config'
import { AxiosError } from 'axios'

export const fetchFavourites = async () => {
	try {
		const response = await instanceWithAuthorization.get(`/favourites`)
		return response.data
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data)
		}
	}
}

export const deleteMovieFromFavourites = async (movieId: string) => {
	try {
		const response = await instanceWithAuthorization.delete(
			`/favourites/${movieId}`
		)
		return response.data
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data)
		}
	}
}

export const addMovieToFavourites = async (movieId: string) => {
	try {
		const response = await instanceWithAuthorization.post(
			`/favourites/${movieId}`
		)
		return response.data
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data)
		}
	}
}
