import type { ReviewModel } from '@pages/Movie/models/ReviewModel'
import styles from './ReviewCard.module.scss'
import userAvatar from '@assets/userAvatar.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { dateTransform } from '@helpers/dateTransform'

export const ReviewCard = (props: ReviewModel) => {
	const [userImage, setUserImage] = useState<string | null | undefined>('')
	const [reviewCreateDate, reviewCreateTime] = dateTransform(props.createTime)
	useEffect(() => {
		;(async () => {
			if (props.anonymous) {
				setUserImage(userAvatar)
			} else {
				setUserImage(
					await handleImageUrl(
						props.author.imageUrl || '',
						userAvatar
					)
				)
			}
		})()
	}, [])
	return (
		<li
			className={`${styles.reviewCard} ${styles[setCardBackgroundColor(props.rating)]}`}
		>
			<header className={styles.reviewCardHeader}>
				<div className={styles.authorImageWrapper}>
					<img
						src={userImage || userAvatar}
						alt='Фото автора рецензии'
					/>
				</div>
				<span className={styles.authorName}>
					{props.anonymous ? 'Аноним' : props.author.login}
				</span>
				<span
					className={`${styles.reviewMark} ${styles[setSpanBackgroundColor(props.rating)]}`}
				>
					{props.rating}
				</span>
			</header>
			<section className={styles.reviewCardContent}>
				<p className={styles.reviewComment}>{props.comment}</p>
			</section>
			<footer className={styles.reviewCardFooter}>
				<span>Написан: {reviewCreateDate}</span>{' '}
				<span>{reviewCreateTime}</span>
			</footer>
		</li>
	)
}

const setCardBackgroundColor = (rating: number): string => {
	if (rating >= 8.0) {
		return 'is-Success'
	}
	if (rating >= 5.0 && rating < 8.0) {
		return 'is-Warning'
	}
	return 'is-Danger'
}

const setSpanBackgroundColor = (rating: number): string => {
	if (rating >= 8.0) {
		return 'is-Success'
	}
	if (rating >= 5.0 && rating < 8.0) {
		return 'is-Warning'
	}
	return 'is-Danger'
}

const handleImageUrl = async (
	imageUrl: string | null | undefined,
	imageDefault: string
) => {
	if (await isImageUrlValid(imageUrl)) {
		return imageUrl
	}
	return imageDefault
}

const isImageUrlValid = async (imageUrl: string | null | undefined) => {
	if (!imageUrl) return false
	try {
		const response = await axios.get(imageUrl)
		console.log(response)
		return true
	} catch {
		return false
	}
}
