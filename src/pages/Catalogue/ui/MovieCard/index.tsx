import { useEffect } from 'react'
import styles from './index.module.scss'
import { Badge, Tooltip } from 'antd'
import type { MovieCardProps } from '@shared/models/MovieModel'
import { useRecommendMark } from '@hooks/useRecommendMark'
import type { CallbackProps } from '@shared/models/Callback'
import noImage from '@assets/no-photo.jpeg'
const MovieCard = ({
	title,
	filmYear,
	imageUrl,
	rating,
	genres,
	callback
}: MovieCardProps & CallbackProps) => {
	const { isVisible, color, recommendationMsg, handleRecommend } =
		useRecommendMark()
	useEffect(() => {
		handleRecommend(rating)
	}, [])
	const filmGenres = genres
		.map(genre => {
			return genre.name
		})
		.join(', ')
	return (
		<Badge.Ribbon
			text={recommendationMsg}
			color={color || undefined}
			className={!isVisible ? styles.hidden : ''}
		>
			<div className={styles.card} onClick={callback}>
				<div className={styles.cardImageWrapper}>
					<img
						className={styles.cardImage}
						src={imageUrl}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null
							currentTarget.src = noImage
						}}
						alt='Не удалось загрузить изобажение'
					/>
				</div>
				<ul className={styles.cardBody}>
					<li className={styles.cardBodyItem}>
						<Tooltip title={title} placement='bottom'>
							<p className={styles.cardTitle}>{title}</p>
						</Tooltip>
					</li>
					<li className={styles.cardBodyItem}>
						<Tooltip title={filmGenres} placement='bottom'>
							<p className={styles.cardInfo}>
								{filmYear + ', ' + filmGenres}
							</p>
						</Tooltip>
					</li>
				</ul>
			</div>
		</Badge.Ribbon>
	)
}

export default MovieCard
