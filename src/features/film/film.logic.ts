import {FilmInput} from "./film.types.ts";
import Film from './film.model.ts';
import { filmFactory } from "./film.factory.ts";
import {fetchFilmFromOmdb} from "../../utils/film.omdb.ts";
import {OmdbFilm} from "../../types/omdb.ts";

export const getAll = async (): Promise<FilmInput[]> => {
    const films = await Film.find().exec(); // .exec() для правильного типу Promise
    return films;
};

export const getShown = async (): Promise<FilmInput[]> => {
    const films = await Film.find({ isShown: true }).exec();
    return films;
}

export const create = async (filmData: FilmInput): Promise<FilmInput> => {
    const newFilm = filmFactory(filmData);
    const savedFilm = await newFilm.save();
    return savedFilm;
}

export const getByTitle = async (title: string): Promise<FilmInput | null> => {
    const film = await Film.findOne({ title }).exec();

    const filmData: OmdbFilm | null = await fetchFilmFromOmdb(title);

    if (!film && !filmData) return null;

    if (!film) {
        return { title, omdb: filmData || undefined };
    }

    return {
        ...film.toObject(),
        omdb: filmData || undefined,
    };
};