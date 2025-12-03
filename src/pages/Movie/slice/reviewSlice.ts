import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ReviewModel } from "../models/ReviewModel"

interface ReviewInitial {
    reviews: Array<ReviewModel> | null
    hasReview: boolean
}

const initialState: ReviewInitial = {
    reviews: null,
    hasReview: false
}

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews: (state, action: PayloadAction<Array<ReviewModel>>) => {
            state.reviews = action.payload
        },
        setHasReview: (state, action: PayloadAction<boolean>) => {
            state.hasReview = action.payload
        }
    }
})

export const {setHasReview, setReviews} = reviewSlice.actions
export default reviewSlice.reducer