import type { Request, Response } from "express";
import { SessionLogic } from "./session.logic.ts";
import { SessionFactory } from "./session.factory.ts";
import {SessionScheduler} from "./session.scheduler.ts";
import type {ISession} from "./session.types.ts";

export const SessionController = {
    async create(req: Request, res: Response) {
        try {
            const { filmId, hallId, startTime } = req.body;
            const session: ISession = SessionFactory.create(filmId, hallId, new Date(startTime));
            await session.save();
            res.status(201).json(session);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }
    },

    async bookSeats(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { seats } = req.body;
            const updated: ISession = await SessionLogic.bookSeats(id, seats);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }
    },

    async autoGenerate(req: Request, res: Response) {
        try {
            const { days, deleteOld } = req.params;
            const result = await SessionScheduler.generateRandomSessions({
                days: Number(days) || 3,
                deleteOld: deleteOld !== "false",
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }
    },
};