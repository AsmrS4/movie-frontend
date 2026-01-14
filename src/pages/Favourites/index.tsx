import type { MovieShort } from '@shared/models/MovieModel'
import styles from './index.module.scss'
import { useState } from 'react'

export const FavouritesPage = () => {
	const [favourites, setFavourites] = useState<MovieShort[] | null>(null)
	return (
		<section className={styles.favouritesPage}>
			<div className={styles.container}>
				<div className={styles.containerHeader}>
					<h2>Избранное</h2>
				</div>
				<ul className={styles.favouritesHolder}>
					<li className={styles.favouritesItem}></li>
				</ul>
			</div>
		</section>
	)
}
