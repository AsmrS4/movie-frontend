import type { Dispatch } from "@reduxjs/toolkit"
import { setSession } from "@shared/store/slices/AuthorizationSlice"
import { instanceDefault } from "@utils/api/axios.config"
import type { AuthRequest } from "../models/AuthModel"
import { AxiosError } from "axios"

export const loginUser = (form: AuthRequest) => async (dispatch: Dispatch) => {
    try {
        const response = await instanceDefault.post('/auth/login', {
            ...form
        })
        dispatch(setSession(response.data))
        window.location.href = '/'
    } catch (error) {
        if(error instanceof AxiosError) {
            if(error.status === 404) {
                throw new Error("Пользователь не найден")
            }
            if(error.status === 400) {
                throw new Error('Неверный пароль')
            }
        }
        throw new Error('Что-то пошло не так')
    }
}

export const registerUser = (form: AuthRequest) => async (dispatch: Dispatch) => {
    try {
        const response = await instanceDefault.post('/auth/registration', {
            ...form
        })
        dispatch(setSession(response.data))
        window.location.href = '/'
    } catch (error) {
        if(error instanceof AxiosError) {
            if(error.status === 400) {
                throw new Error('Логин занят')
            }
        }
        throw new Error('Что-то пошло не так')
    }
}