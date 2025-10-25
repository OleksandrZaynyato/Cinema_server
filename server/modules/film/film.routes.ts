import { Router } from 'express';
import * as FilmController from './film.controller.ts';
import asyncHandler from '../../middleware/asyncHendler.ts';

const filmRoutes = Router();
filmRoutes.get('/', asyncHandler(FilmController.getAll));
filmRoutes.get('/shown', asyncHandler(FilmController.getShown));
filmRoutes.get('/:title', asyncHandler(FilmController.getByTitle));
filmRoutes.post('/', asyncHandler(FilmController.create));


export default filmRoutes;
