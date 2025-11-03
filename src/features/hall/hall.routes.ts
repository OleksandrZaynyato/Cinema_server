import {Router} from "express";
import asyncHandler from "../../middleware/asyncHendler.ts";
import * as HallController from '../hall/hall.controller.ts';

const hallRoutes = Router()

hallRoutes.get('/', asyncHandler(HallController.getAllHallHandler));
hallRoutes.get('/:title', asyncHandler(HallController.getHallByNameHandler));
hallRoutes.post('/', asyncHandler(HallController.createHallHandler));
hallRoutes.put('/:title', asyncHandler(HallController.updateHallHandler));
hallRoutes.delete('/:title', asyncHandler(HallController.deleteHallHandler));


export default hallRoutes;