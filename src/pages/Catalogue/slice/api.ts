import type { Dispatch } from '@reduxjs/toolkit'
import type { MovieFilter, Pagination } from '@shared/models/MovieModel'
import { instanceDefault } from '@utils/api/axios.config'
import { manageLoadingProcess, setMovies, setPagination } from './movieSlice'
import { delay } from '@helpers/delay'

export const fetchMovies =
	(filters: MovieFilter | null, pagination: Pagination) =>
	async (dispatch: Dispatch) => {
		dispatch(manageLoadingProcess(true))
		try {
			const { current, size } = pagination
			const response = await instanceDefault.get('/movie/catalogue', {
				params: {
					...filters,
					page: current,
					size: size
				}
			})
			dispatch(setMovies(response.data.movies))
			dispatch(setPagination(response.data.pagination))
		} catch (error) {
			throw new Error('Не удалось получить данные')
		} finally {
			delay(() => {
				dispatch(manageLoadingProcess(false))
			}, 500)
		}
	}

export const fetchGenres = async () => {
	try {
		return (await instanceDefault.get('/movie/catalogue/genres')).data
	} catch (error) {
		throw new Error('Не удалось получить данные о жанрах')
	}
}
