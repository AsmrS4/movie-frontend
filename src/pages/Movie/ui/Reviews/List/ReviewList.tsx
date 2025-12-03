import type { ReviewModel } from "@pages/Movie/models/ReviewModel";
import styles from './ReviewList.module.scss'
import { ReviewCard } from "../Card/ReviewCard";
interface ReviewListProps {
    reviews: ReviewModel[] | null
}
export const ReviewList = ({reviews}: ReviewListProps) => {
    return (
        <ul className={styles.movieReviewsHolder}>
			{reviews && reviews?.length > 0 ? <>
                {reviews?.map(review => {
				    return <ReviewCard key={review.id} {...review}/>
			    })}
            </>: 
            <>
                <div className={styles.emptyResult}>
                    <span>У этого фильма пока нет рецензий</span>
                </div>
            </>}
		</ul>
    )
}