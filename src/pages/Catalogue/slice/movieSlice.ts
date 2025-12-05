import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
	MovieCardProps,
	MovieFilter,
	Pagination
} from '@shared/models/MovieModel'

interface MoviesInitialProps {
	filter: MovieFilter | null
	movies: MovieCardProps[]
	isLoading: boolean
	pagination: Pagination
}

const initialState: MoviesInitialProps = {
	filter: {
		search: '',
		minAge: 0,
		maxAge: 18,
		minYear: 1950,
		maxYear: new Date().getFullYear()
	},
	movies: [],
	isLoading: false,
	pagination: {
		current: 1,
		count: 0,
		size: 9
	}
}

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		manageLoadingProcess: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		clearMovies: state => {
			state.movies = []
		},
		setMovies: (state, action: PayloadAction<MovieCardProps[]>) => {
			state.movies = action.payload
		},
		setPagination: (state, action: PayloadAction<Pagination>) => {
			state.pagination = action.payload
		},
		setFilters: (state, action: PayloadAction<MovieFilter>) => {
			state.filter = action.payload
			state.pagination.current = 1
		},
		changeCurrentPage: state => {
			state.pagination.current = state.pagination.current + 1
		}
	}
})

export const {
	manageLoadingProcess,
	setMovies,
	setPagination,
	changeCurrentPage,
	clearMovies,
	setFilters
} = movieSlice.actions

export default movieSlice.reducer
