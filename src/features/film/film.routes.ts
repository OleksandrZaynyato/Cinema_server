import { Router } from 'express';
import * as FilmController from './film.controller.ts';
import asyncHandler from '../../middleware/asyncHendler.ts';
import {getShownFilmsHandler} from "./film.controller.ts";

const filmRoutes = Router();
filmRoutes.get('/', asyncHandler(FilmController.getAllFilmsHandler));
filmRoutes.get('/shown', asyncHandler(FilmController.getShownFilmsHandler));
filmRoutes.get('/:title', asyncHandler(FilmController.getFilmByTitleHandler));
filmRoutes.post('/', asyncHandler(FilmController.createFilmHandler));
filmRoutes.put('/:title', asyncHandler(FilmController.updateFilmHandler));
filmRoutes.delete('/:title', asyncHandler(FilmController.deleteFilmHandler));


export default filmRoutes;
