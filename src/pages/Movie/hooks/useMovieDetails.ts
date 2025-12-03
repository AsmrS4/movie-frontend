import { useAppSelector } from "@hooks/useAppSelector"
import type { MoviePageProps } from "@shared/models/MovieModel"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchMovieDetails } from "../slice/api"
import { setMovieDetails } from "../slice/movieSlice"

const useMovie = () => {
    const [movieDetails, setMovie] = useState<MoviePageProps | null>(null)
	const dispatch: any = useDispatch()
	const { id } = useParams()
	const { isLoading, movie } = useAppSelector(
		state => state.movieDetailsReducer
	)
	const onPageLoad = async () => {
		try {
			setMovie(await fetchMovieDetails(id || ''))
		} catch (error) {}
	}
	useEffect(() => {
		movieDetails !== null
			? dispatch(setMovieDetails(movieDetails))
			: onPageLoad()
	}, [movieDetails])
    return {movie, isLoading, movieDetails, id, dispatch}
} 

export default useMovie