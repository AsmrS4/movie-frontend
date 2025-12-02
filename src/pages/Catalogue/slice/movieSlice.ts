import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieCardProps, Pagination } from "@shared/models/MovieModel";

interface MoviesInitialProps {
    movies: MovieCardProps[],
    isLoading: boolean
    pagination: Pagination
}

const initialState: MoviesInitialProps = {
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
        setMovies: (state, action: PayloadAction<MovieCardProps[]>) => {
            state.movies = action.payload
        },
        setPagination: (state, action: PayloadAction<Pagination>) => {
            state.pagination = action.payload
        },
        changeCurrentPage: (state) => {
            state.pagination.current = state.pagination.current + 1
        }
    }
})

export const {manageLoadingProcess, setMovies, setPagination, changeCurrentPage} = movieSlice.actions

export default movieSlice.reducer