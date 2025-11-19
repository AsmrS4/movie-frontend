import { instanceDefault } from "@utils/api/axios.config"

export const fetchMovieDetails = async(movieId: string) => {
    try {
        const response = await instanceDefault.get(`/movie/${movieId}`)
        return response.data
    } catch (error) {
        
    }
}