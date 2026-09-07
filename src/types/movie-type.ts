export interface MovieCompType {
    id: number;
    title: string;
    genre: string;
    year: number;
    description: string;
    rating: number;
    addFavourite: (movie: OutputMovieType) => void;
}

export interface OutputMovieType {
    id: number;
    title: string;
}

export type MovieType = Omit<MovieCompType, "addFavourite">