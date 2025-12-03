export interface UserModel {
    id: string,
    firstName: string,
    lastName: string,
    imageUrl: string | null,
    login: string,
    createTime: Date
}

export interface ReviewAuthorModel {
    id: string
    login: string
    imageUrl: string | null
}