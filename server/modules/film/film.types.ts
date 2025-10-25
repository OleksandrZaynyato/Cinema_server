export interface Seat {
    row: number;
    number: number;
    isTaken: boolean;
}

export interface Session {
    time: Date;
    hall: string;
    seats: Seat[][];
}

export interface FilmInput {
    title: string;
    imageUrl?: string;
    trailerUrl?: string;
    sessions: Session[];
    isShown?: Boolean;
}

export interface OmdbFilm {
    Title: string;
    Year: string;
    Genre: string;
    Runtime: string;
    Director: string;
    Plot: string;
    Poster: string;
    imdbRating: string;
    [key: string]: any;
}
