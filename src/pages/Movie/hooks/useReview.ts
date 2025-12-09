import { useAppSelector } from '@hooks/useAppSelector'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { fetchMovieReviews } from '../slice/api'
import { setHasReview, setReviews } from '../slice/reviewSlice'

const useReviews = (movieId: string) => {
	const dispatch: any = useDispatch()
	const { reviews, hasReview } = useAppSelector(state => state.reviewReducer)

	const onPageLoad = async () => {
		try {
			const response = await fetchMovieReviews(movieId)
			await dispatch(setReviews(response))
		} catch (error) {
			await dispatch(setReviews([]))
		}
	}

	useEffect(() => {
		onPageLoad()
	}, [movieId])

	return { reviews }
}

export default useReviews
