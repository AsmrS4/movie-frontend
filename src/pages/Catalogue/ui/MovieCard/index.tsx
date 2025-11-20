import { useEffect } from 'react'
import styles from './index.module.scss'
import { Badge, Button, Tooltip } from 'antd'
import type { MovieCardProps } from '@shared/models/MovieModel'
import { useRecommendMark } from '@hooks/useRecommendMark'
import type { CallbackProps } from '@shared/models/Callback'

const MovieCard = ({
	movieId,
	title,
	filmYear,
	imageUrl,
	rating,
	genres,
	callback
}: MovieCardProps & CallbackProps) => {
	const { isVisible, color, handleRecommend } = useRecommendMark()
	useEffect(() => {
		handleRecommend(rating)
	}, [])
	return (
		<Badge.Ribbon
			text='Высокий рейтинг'
			color={color || undefined}
			className={!isVisible ? styles.hidden : ''}
		>
			<div className={styles.card} onClick={callback}>
				<div className={styles.cardImageWrapper}>
					<img
						className={styles.cardImage}
						src={imageUrl}
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
						<span className={styles.cardInfo}>{filmYear}</span>
						<span className={styles.cardInfo}>
							{', '}
							{genres[0].name}
						</span>
					</li>
					<li className={styles.cardBodyItem}>
						<Button
							style={{ width: '100%' }}
							shape='round'
							variant='filled'
							id={movieId}
						>
							Открыть
						</Button>
					</li>
				</ul>
			</div>
		</Badge.Ribbon>
	)
}

export default MovieCard
