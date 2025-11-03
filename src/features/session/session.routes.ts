import { Router } from "express";
import { SessionController } from "./session.controller.ts";
import asyncHandler from "../../middleware/asyncHendler.ts";

const router = Router();

router.post("/", asyncHandler(SessionController.create));
router.post("/:id/book", asyncHandler(SessionController.bookSeats));

export default router;