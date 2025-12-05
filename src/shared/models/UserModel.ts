export interface UserModel {
	id: string
	firstName?: string | null
	lastName?: string | null
	imageUrl?: string | null
	login: string | null
	createTime: string | Date
}

export interface EditUserModel {
	firstName?: string | null
	lastName?: string | null
	login: string
	imageUrl?: string | null
}

export interface ReviewAuthorModel {
	id: string
	login: string
	imageUrl: string | null
}
