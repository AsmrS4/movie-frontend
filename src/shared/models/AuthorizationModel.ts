import type { UserModel } from "./UserModel"

export interface AuthorizationResponse {
    token: TokenResponse,
        profile: UserModel
}

export interface TokenResponse {
    accessToken: string,
    refreshToken: string
} 