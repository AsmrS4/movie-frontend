import { Button, Tooltip } from 'antd'
import { FilterOutlined, UndoOutlined } from '@ant-design/icons'

import CustomModal from '@widgets/Modal'
import MovieCard from './ui/MovieCard'
import FilterForm from './ui/FilterForm'
import { useCatalogue } from './hooks/useCatalogue'
import styles from './index.module.scss'
import { useModal } from '@hooks/useModal'
import { EMPTY_FILMS_RESULT } from '@shared/contants/messages'

const MovieCataloguePage = () => {
	const { openModal, setOpen } = useModal()
	const {
		loadedMovies,
		disableLoad,
		handleOnCardClick,
		increaseCurrentPage,
		resetMovieFilters
	} = useCatalogue()

	return (
		<section className={styles.cataloguePage}>
			<div className={styles.container}>
				<div className={styles.containerHeader}>
					<h1>Фильмы</h1>
					<div className='flex gap-[10px]'>
						<Tooltip title='Сбросить фильтры' placement='left'>
							<Button
								size='large'
								shape='round'
								className={styles.styledButton}
								icon={<UndoOutlined />}
								iconPosition='end'
								onClick={() => {
									resetMovieFilters()
								}}
							/>
						</Tooltip>
						<Tooltip title='Применить фильтры'>
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
						</Tooltip>
					</div>
				</div>
				{loadedMovies.length > 0 ? (
					<>
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
					</>
				) : (
					<div className={styles.emptyResult}>
						<span>{EMPTY_FILMS_RESULT}</span>
					</div>
				)}
			</div>
			<CustomModal
				modalTitle={'Фильтры'}
				open={openModal}
				setOpen={setOpen}
				children={
					<FilterForm
						setClose={() => {
							setOpen(false)
						}}
					/>
				}
			/>
		</section>
	)
}

export default MovieCataloguePage
