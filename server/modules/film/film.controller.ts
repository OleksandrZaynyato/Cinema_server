import type { Request, Response, NextFunction } from 'express';
import Film from './film.model.ts';
import { fetchFilmFromOmdb } from '../film.omdb.ts';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const films = await Film.find();
        res.json(films);
    } catch (err) {
        next(err);
    }
};

export const getShown = async (req: Request, res: Response, next: NextFunction) => {
    const films = await Film.find({ isShown: true })
    res.json(films)
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const filmData = req.body;
    console.log(req);

    console.log('Creating film with data:', filmData);
    const newFilm = new Film(filmData);
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
};

export const getByTitle = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    const localFilm = await Film.findOne({ title });
    const omdbData = await fetchFilmFromOmdb(title);

    if (!localFilm) return omdbData;

    const film = {
        ...localFilm.toObject(),
        omdb: omdbData,
    };
    if (!film) return res.status(404).json({ message: 'Film not found' });
    res.json(film);
};
