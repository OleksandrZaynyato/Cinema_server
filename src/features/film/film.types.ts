import type {OmdbFilm} from "../../types/omdb.ts";

export interface FilmInput {
    title: string;
    imageUrl?: string;
    trailerUrl?: string;
    isShown?: Boolean;
    omdb?: OmdbFilm;
}