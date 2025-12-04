import type { ReviewModel } from '@pages/Movie/models/ReviewModel'
import styles from './ReviewList.module.scss'
import { ReviewCard } from '../Card/ReviewCard'
import { EMPTY_REVIEWS_RESULT } from '@shared/contants/messages'
interface ReviewListProps {
	reviews: ReviewModel[] | null
}
export const ReviewList = ({ reviews }: ReviewListProps) => {
	return (
		<ul className={styles.movieReviewsHolder}>
			{reviews && reviews?.length > 0 ? (
				<>
					{reviews?.map(review => {
						return <ReviewCard key={review.id} {...review} />
					})}
				</>
			) : (
				<>
					<div className={styles.emptyResult}>
						<span>{EMPTY_REVIEWS_RESULT}</span>
					</div>
				</>
			)}
		</ul>
	)
}
