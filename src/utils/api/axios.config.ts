import type { Dispatch } from "@reduxjs/toolkit";
import { clearSession, refreshSession } from "@shared/store/slices/AuthorizationSlice";
import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode }from 'jwt-decode'
import { useDispatch } from "react-redux";

const BASE_URL = 'http://localhost:8080/api'

const instanceDefault = axios.create({
    baseURL: BASE_URL
})

const instanceWithAuthorization = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    }
})

instanceDefault.interceptors.response.use(
    (result) => { console.log(result.status); return result; },
    (error) => { console.log(error); throw error }
)

instanceWithAuthorization.interceptors.response.use(
    (result) => { console.log(result.status); return result; },
    (error) => { 
        if(axios.isAxiosError(error)) {
            if(error.status === 401) {
                localStorage.clear();
                window.location.href = '/auth';
            }
        } else {
            console.log(error);
            throw error
        } 
    }
)

instanceWithAuthorization.interceptors.request.use(async req => {
    const accessToken = getTokenFromStorage('ACCESS_TOKEN')
    const refreshToken = getTokenFromStorage('REFRESH_TOKEN')
    const dispatch = useDispatch();

    if(accessToken === null || refreshToken == null) {
        dispatch(clearSession())
        window.location.href = '/auth'
    }

    const payload = jwtDecode(accessToken || '')
    const isAccessExpired = dayjs.unix(payload.exp || 0).diff(dayjs()) < 1

    if(!isAccessExpired) return req

    await refresh(refreshToken, dispatch)

    req.headers.Authorization = `Bearer ${getTokenFromStorage('ACCESS_TOKEN')}`
    return req
})

const refresh = async(refreshToken: string | null, dispatch: Dispatch) => {
    try {
        const response = await instanceDefault.post('/auth/refresh', {
            refreshToken: refreshToken
        })
        dispatch(refreshSession(response.data))
    } catch (error) {
        dispatch(clearSession())
        window.location.href = '/auth';
    }
}

const getTokenFromStorage = (key: 'ACCESS_TOKEN' | 'REFRESH_TOKEN') => {
    return localStorage?.getItem(key);
}

export {instanceDefault, instanceWithAuthorization}