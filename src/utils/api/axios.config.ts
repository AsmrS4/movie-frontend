import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode }from 'jwt-decode'

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
    (result) => { console.log(result.data); return result; },
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
    

    if(accessToken === null || refreshToken == null) {
        localStorage.clear();
        window.location.href = '/auth'
    }

    const payload = jwtDecode(accessToken || '')
    const isAccessExpired = dayjs.unix(payload.exp || 0).diff(dayjs()) < 1

    if(!isAccessExpired) return req

    await refresh(refreshToken)

    req.headers.Authorization = `Bearer ${getTokenFromStorage('ACCESS_TOKEN')}`
    return req
})

const refresh = async(refreshToken: string | null) => {
    try {
        const response = await instanceDefault.post('/auth/refresh', {
            refreshToken: refreshToken
        })
        localStorage.setItem('ACCESS_TOKEN', response.data.accessToken)
        localStorage.setItem('REFRESH_TOKEN', response.data.refreshToken)
    } catch (error) {
        localStorage.clear()
        window.location.href = '/auth';
    }
}

const getTokenFromStorage = (key: 'ACCESS_TOKEN' | 'REFRESH_TOKEN') => {
    return localStorage?.getItem(key);
}

export {instanceDefault, instanceWithAuthorization}