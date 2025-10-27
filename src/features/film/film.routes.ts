import { Router } from 'express';
import * as FilmController from './film.controller.ts';
import asyncHandler from '../../middleware/asyncHendler.ts';
import {getShownHandler} from "./film.controller.ts";

const filmRoutes = Router();
filmRoutes.get('/', asyncHandler(FilmController.getAll));
filmRoutes.get('/shown', asyncHandler(FilmController.getShownHandler));
filmRoutes.get('/:title', asyncHandler(FilmController.getByTitleHandler));
filmRoutes.post('/', asyncHandler(FilmController.createHandler));
filmRoutes.put('/:title', asyncHandler(FilmController.updateHandler));
filmRoutes.delete('/:title', asyncHandler(FilmController.deleteHandler));


export default filmRoutes;
