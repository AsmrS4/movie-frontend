import { useEffect } from 'react'
import styles from './index.module.scss'
import { Button } from 'antd'
import { useAppSelector } from '@hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { fetchMovies } from './slice/api'
import { FilterOutlined } from '@ant-design/icons'
import MovieCard from './ui/MovieCard'

const MovieCataloguePage = () => {
	const dispatch: any = useDispatch()

	const { movies, isLoading, pagination } = useAppSelector(
		state => state.movieReducer
	)

	const handleOnCardClick = (cardId: string) => {
		window.location.href = `/movie/${cardId}`
	}

	useEffect(() => {
		dispatch(fetchMovies(pagination))
	}, [pagination.page])

	return (
		<section className={styles.cataloguePage}>
			<div className={styles.container}>
				<div className={styles.containerHeader}>
					<article>Фильмы</article>
					<Button
						size='large'
						icon={<FilterOutlined />}
						iconPosition='end'
					>
						Фильтры
					</Button>
				</div>
				<ul className={styles.catalogueHolder}>
					{movies.map(movie => {
						return (
							<li
								key={movie.movieId}
								className={styles.catalogueHolderItem}
							>
								<MovieCard
									{...movie}
									callback={() => {
										handleOnCardClick(movie.movieId)
									}}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default MovieCataloguePage
