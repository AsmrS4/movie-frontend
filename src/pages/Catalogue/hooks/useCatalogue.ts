import { useAppSelector } from '@hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { changeCurrentPage, manageLoadingProcess } from '../slice/movieSlice'
import { useEffect, useState } from 'react'
import { fetchMovies } from '../slice/api'
import type { MovieCardProps } from '@shared/models/MovieModel'
import { delay } from '@helpers/delay'

export const useCatalogue = () => {
	const { movies, isLoading, pagination } = useAppSelector(
		state => state.movieReducer
	)
	const [disableLoad, setDisableLoadButton] = useState<boolean>(false)
	const [loadedMovies, setLoadedMovies] = useState<MovieCardProps[]>([])
	const dispatch: any = useDispatch()

	const handleOnCardClick = (cardId: string) => {
		window.location.href = `/movie/${cardId}`
	}

	const increaseCurrentPage = () => {
		if (pagination.current <= pagination.count)
			dispatch(changeCurrentPage())
	}

	useEffect(() => {
		if (pagination.count != 0 && pagination.current >= pagination.count) {
			setDisableLoadButton(true)
		}
		if (pagination.count == 0 || pagination.current <= pagination.count)
			dispatch(fetchMovies(pagination))
	}, [pagination.current])

	useEffect(() => {
		if (pagination.current <= pagination.count) {
			setLoadedMovies(prev => [...prev, ...movies])
			delay(dispatch(manageLoadingProcess(false)), 500)
		}
	}, [movies])

	return {
		movies,
		loadedMovies,
		disableLoad,
		isLoading,
		handleOnCardClick,
		increaseCurrentPage
	}
}
