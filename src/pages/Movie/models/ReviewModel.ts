import type { ReviewAuthorModel } from '@shared/models/UserModel'

export interface ReviewModel {
	id: string
	comment: string
	rating: number
	author: ReviewAuthorModel
	anonymous: boolean
	createTime: string
}

export interface CreateReviewModel {
	comment: string
	rating: number
	anonymous: boolean
}

export interface EditReviewModel {
	id: string
	comment: string
	rating: number
	anonymous: boolean
}
