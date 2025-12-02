import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MoviePageProps } from "@shared/models/MovieModel";

interface MoviePageInit {
    movie: MoviePageProps
    isLoading: boolean
}

const initialState: MoviePageInit = {
    movie: {
        movieId: '',
        title: '',
        description: '',
        filmYear: 0,
        country: '',
        imageUrl: '',
        lasting: 0,
        rating: 0,
        ageLimit: 0,
        budget: '',
        fees: '',
        actors: '',
        director: '',
        genres: [],
    },
    isLoading: false
}

export const moviePageSlice = createSlice({
    name: 'moviePage',
    initialState,
    reducers: {
        setMovieDetails: (state, action: PayloadAction<MoviePageProps>) =>{
            state.movie = {...action.payload}
        },
        manageLoadingProcess: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const {setMovieDetails, manageLoadingProcess} = moviePageSlice.actions
export default moviePageSlice.reducer