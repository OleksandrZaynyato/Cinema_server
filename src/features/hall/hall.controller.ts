import type { NextFunction, Request, Response} from 'express';
import {createHall, deleteHall, getAllHalls, getHallByName, updateHall} from "./hall.logic.ts";


export const getAllHallHandler = async (req: Request, res: Response) => {
    const halls = await getAllHalls();
    res.json(halls);
}

export const createHallHandler = async (req: Request, res: Response, next: NextFunction) => {
    const filmData = req.body;
    const newFilm = await createHall(filmData);
    res.status(201).json(newFilm);
};

export const getHallByNameHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    const film = await getHallByName(title);
    if (!film) return res.status(404).json({ message: 'Film not found' });
    res.json(film);
};

export const updateHallHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    const updateData = req.body;
    const updatedFilm = await updateHall(title, updateData);
    if (!updatedFilm) return res.status(404).json({ message: 'Film not found' });
    res.json(updatedFilm);
};

export const deleteHallHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    const deletedFilm = await deleteHall(title);
    if (!deletedFilm) return res.status(404).json({ message: 'Film not found' });
    res.json(deletedFilm);
}
