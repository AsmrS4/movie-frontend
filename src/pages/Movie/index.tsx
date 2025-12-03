import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import styles from './index.module.scss'
import useMovie from './hooks/useMovieDetails'
import useReviews from './hooks/useReview'
import { useParams } from 'react-router-dom'
import { ReviewList } from './ui/Reviews/List/ReviewList'
import { ceilDecimal } from '@helpers/ceilRating'
import noImage from '@assets/no-photo.jpeg'

const MoviePage = () => {
	const { id } = useParams()
	const {movie, isLoading} = useMovie(id || '')
	const {reviews, hasReview} = useReviews(id || '')
	
	const handleClickOnFavouritesButton = () => {

	}
	
	return (
		<section className={styles.moviePage}>
			<div className={styles.container}>
				<div className={styles.containerHeader}>
					<h2>{`${movie.title}(${movie.filmYear})`}</h2>
				</div>
				<section className={styles.movieDetailsContainer}>
					<div className={styles.imageContainer}>
						{movie.rating > 0 && <span className={styles.ratingMark}>{ceilDecimal(movie.rating)}</span>}
						<img src={movie?.imageUrl} 
							onError={({ currentTarget }) => {
    						currentTarget.onerror = null; 
    						currentTarget.src=noImage;}} 
							alt='Фото пользователя' />
					</div>
					<ul className={styles.movieDetails}>
						<li className={styles.movieDetailsItem}>
							<Button shape='round'>В избранное</Button>
						</li>
						<li className={styles.movieDetailsItem}>
							<strong>О фильме</strong>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>Год выпуска</span>
							<p>{movie.filmYear}</p>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>Страна</span>
							<p>{movie.country}</p>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>Длительность</span>
							<p>{movie.lasting} мин.</p>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>Режиссер</span>
							<p>{movie.director}</p>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>В ролях</span>
							<p>{movie.actors}</p>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>Возраст</span>
							<p>{movie.ageLimit}+</p>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>Бюджет</span>
							<p>{movie.budget}</p>
						</li>
						<li className={styles.movieDetailsItem}>
							<span>Сборы</span>
							<p>{movie.fees}</p>
						</li>
					</ul>
				</section>
				<section className={styles.movieDescription}>
					<strong>Описание</strong>
					<p>{movie.description}</p>
				</section>
				<section className={styles.movieReviewsContainer}>
					<div className={styles.movieReviewsSectionTitle}>
						<strong>Рецензии пользователей</strong>
						{reviews && reviews.length > 0 && <span className={styles.count}>{reviews?.length} рецензии</span>}
						{!hasReview && <Button
							className={styles.styledButton}
							shape='round'
							icon={<PlusOutlined />}
						>
							Написать рецензию
						</Button>}
					</div>
					<ReviewList reviews={reviews}/>
				</section>
			</div>
		</section>
	)
}

export default MoviePage
