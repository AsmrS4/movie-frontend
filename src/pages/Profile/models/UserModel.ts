export interface EditUserModel {
    firstName: string
    lastName: string
    login: string
    imageUrl?: string
}

export interface EditPassword {
    prevPassword: string
    newPassword: string
    confirmPassword: string
}