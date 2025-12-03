import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import styles from './index.module.scss'
import useMovie from './hooks/useMovieDetails'

const MoviePage = () => {
	const {movie, isLoading, id} = useMovie()
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
						<img src={movie?.imageUrl} alt='Фото пользователя' />
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
						<Button
							className={styles.styledButton}
							shape='round'
							icon={<PlusOutlined />}
						>
							Написать рецензию
						</Button>
					</div>
					<ul className={styles.movieReviewsHolder}></ul>
				</section>
			</div>
		</section>
	)
}

export default MoviePage
