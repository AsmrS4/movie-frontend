import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserModel } from "@models/UserModel";
import type { AuthorizationResponse, TokenResponse } from "@shared/models/AuthorizationModel";

interface AuthorizationModel {
    isAuthorized: boolean
    accessToken: string | null,
    refreshToken: string | null,
    profile: UserModel | null
}

const initialState: AuthorizationModel = {
    isAuthorized: !!localStorage.getItem('ACCESS_TOKEN'),
    accessToken: localStorage.getItem('ACCESS_TOKEN'),
    refreshToken: localStorage.getItem('REFRESH_TOKEN'),
    profile: null
}

const authorizationSlice = createSlice( {
    name: 'authorization',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<AuthorizationResponse>) => {
            state.accessToken = action.payload.token.accessToken
            state.refreshToken = action.payload.token.refreshToken
            localStorage.setItem('ACCESS_TOKEN', action.payload.token.accessToken)
            localStorage.setItem('REFRESH_TOKEN', action.payload.token.refreshToken)
            localStorage.setItem('USER_ID', action.payload.profile.id)
            state.isAuthorized = true
        },
        refreshSession: (state, action: PayloadAction<TokenResponse>) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            localStorage.setItem('ACCESS_TOKEN', action.payload.accessToken)
            localStorage.setItem('REFRESH_TOKEN', action.payload.refreshToken)
            state.isAuthorized = true
        },
        clearSession: (state) => {
            state.isAuthorized = false
            localStorage.clear();
        }
    }
})

export const {setSession, refreshSession, clearSession} = authorizationSlice.actions
export default authorizationSlice.reducer;