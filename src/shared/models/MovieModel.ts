export interface MovieCardProps {
	movieId: string
	title: string
	filmYear: number
	imageUrl: string
	rating: number
	genres: GenreProps[]
}

export interface GenreProps {
	id: string
	name: string
}

export interface Pagination {
    page: number
    count: number
    size: number
}
