export interface UserModel {
    id: string,
    firstName: string,
    lastName: string,
    imageUrl: string | null,
    login: string,
    createTime: Date
}