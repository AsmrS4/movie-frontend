import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import { useAppSelector } from '@hooks/useAppSelector'
import type { MovieCardProps } from '@shared/models/MovieModel'
import CustomModal from '@widgets/Modal'

import MovieCard from './ui/MovieCard'
import FilterForm from './ui/Form'
import { changeCurrentPage } from './slice/movieSlice'
import { fetchMovies } from './slice/api'

import styles from './index.module.scss'
import { useCatalogue } from './hooks/useCatalogue'

const MovieCataloguePage = () => {
	const [openModal, setOpen] = useState<boolean>(false)
	const {
		loadedMovies,
		disableLoad,
		handleOnCardClick,
		increaseCurrentPage
	} = useCatalogue()

	return (
		<section className={styles.cataloguePage}>
			<div className={styles.container}>
				<div className={styles.containerHeader}>
					<h1>Фильмы</h1>
					<Button
						size='large'
						shape='round'
						className={styles.styledButton}
						icon={<FilterOutlined />}
						iconPosition='end'
						onClick={() => {
							setOpen(true)
						}}
					>
						Фильтры
					</Button>
				</div>
				<ul className={styles.catalogueHolder}>
					{loadedMovies.map(movie => {
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
				{!disableLoad && (
					<Button
						size='large'
						shape='round'
						className={styles.styledButton}
						style={{ width: '200px', margin: '20px auto' }}
						onClick={increaseCurrentPage}
					>
						Загрузить еще
					</Button>
				)}
			</div>
			<CustomModal
				modalTitle={'Фильтры'}
				open={openModal}
				setOpen={setOpen}
				children={<FilterForm />}
				okText={'Применить'}
				cancelText={'Отмена'}
			/>
		</section>
	)
}

export default MovieCataloguePage
