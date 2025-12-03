import { useAppSelector } from "@hooks/useAppSelector"
import { useEffect } from "react"

import { useDispatch } from "react-redux";
import { fetchMovieReviews } from "../slice/api";
import { setHasReview, setReviews } from "../slice/reviewSlice";


const useReviews = (movieId: string) => {
    const dispatch: any = useDispatch();
    const {reviews, hasReview} = useAppSelector(state => state.reviewReducer)
    const checkHasReview = (): boolean => {
		const userId = localStorage.getItem('USER_ID') || null
		if(reviews) {
            return reviews.findIndex(review => {
				return review.author.id == userId
			}) >= 0
        }
        return false
	}
	const onPageLoad = async() => {
		try {
            const response = await fetchMovieReviews(movieId);
		    await dispatch(setReviews(response))
        } catch (error) {
            await dispatch(setReviews([]))
        } finally {
            await dispatch(setHasReview(checkHasReview()))
        }
	}
    
    useEffect(() => {
        onPageLoad()  
    }, [movieId]) 

    return {reviews, hasReview}
}

export default useReviews