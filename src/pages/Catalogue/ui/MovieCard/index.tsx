import React from 'react'
import styles from './index.module.scss'
import { Button } from 'antd'
import type { MovieCardProps } from '@shared/models/MovieModel'

const MovieCard = ({
	title,
	filmYear,
	imageUrl,
	rating,
	genres
}: MovieCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImageWrapper}>
				<span className={styles.rating}>{rating}</span>
				<img
					className={styles.cardImage}
					src={imageUrl}
					alt='Не удалось загрузить изобажение'
				/>
			</div>
			<ul className={styles.cardBody}>
				<li className={styles.cardBodyItem}>
					<p className={styles.cardTitle}>{title}</p>
				</li>
				<li className={styles.cardBodyItem}>
					<span className={styles.cardInfo}>{filmYear}</span>
					<span className={styles.cardInfo}>
						{genres.map(genre => genre.name)}
					</span>
				</li>
				<li className={styles.cardBodyItem}>
					<Button type='link'>Открыть</Button>
				</li>
			</ul>
		</div>
	)
}

export default MovieCard
