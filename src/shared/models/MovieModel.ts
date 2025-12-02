export interface MovieCardProps {
	movieId: string
	title: string
	filmYear: number
	imageUrl: string
	rating: number
	genres: GenreProps[]
}

export interface MoviePageProps {
	movieId: string
	title: string
    description: string 
    filmYear: number 
    country: string
    imageUrl: string
    lasting: number
	rating: number 
    ageLimit: number
    budget: string 
    fees: string
    actors: string 
    director: string 
	genres: GenreProps[] 
}


export interface GenreProps {
	id: string
	name: string
}

export interface Pagination {
    current: number
    count: number
    size: number
}
