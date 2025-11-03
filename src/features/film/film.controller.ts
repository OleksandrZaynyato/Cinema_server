import type { Request, Response, NextFunction } from 'express';
import Film from './film.model.ts';
import {getShown, create, getByTitle, updateFilm, deleteFilm} from './film.logic.ts';

export const getAllFilmsHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const films = await Film.find();
        res.json(films);
    } catch (err) {
        next(err);
    }
};

export const getShownFilmsHandler = async (req: Request, res: Response, next: NextFunction) => {
    const films = await getShown();
    res.json(films)
}

export const createFilmHandler = async (req: Request, res: Response, next: NextFunction) => {
    const filmData = req.body;
    const newFilm = await create(filmData);
    res.status(201).json(newFilm);
};

export const getFilmByTitleHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    const film = await getByTitle(title);
    if (!film) return res.status(404).json({ message: 'Film not found' });
    res.json(film);
};

export const updateFilmHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    const updateData = req.body;
    const updatedFilm = await updateFilm(title, updateData);
    if (!updatedFilm) return res.status(404).json({ message: 'Film not found' });
    res.json(updatedFilm);
};

export const deleteFilmHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    const deletedFilm = await deleteFilm(title);
    if (!deletedFilm) return res.status(404).json({ message: 'Film not found' });
    res.json(deletedFilm);
}
