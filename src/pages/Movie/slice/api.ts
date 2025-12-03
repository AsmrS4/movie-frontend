import { instanceDefault, instanceWithAuthorization } from "@utils/api/axios.config"
import type { CreateReviewModel, EditReviewModel } from "../models/ReviewModel"

export const fetchMovieDetails = async(movieId: string) => {
    try {
        const response = await instanceDefault.get(`/movie/${movieId}`)
        return response.data
    } catch (error) {
        
    }
}

export const fetchMovieReviews = async(movieId: string) => {
    try {
        const response = await instanceDefault.get(`/reviews/${movieId}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
            }
        })

        return response.data
    } catch (error) {
        
    }
}

export const createReviewToMovie = async(movieId: string, review: CreateReviewModel) => {
    try {
        const response = await instanceWithAuthorization.post(`/reviews/${movieId}`, {
            ...review
        })
        return response.data
    } catch (error) {
        
    }
}

export const editReview = async(movieId: string, review: EditReviewModel) => {
    try {
        const response = await instanceWithAuthorization.put(`/reviews/${movieId}`, {
            ...review
        })
        return response.data
    } catch (error) {
        
    }
}

export const deleteReview = async(reviewId: string) => {
    try {
        return await instanceWithAuthorization.delete(`/reviews/${reviewId}`)
    } catch (error) {
        
    }
}