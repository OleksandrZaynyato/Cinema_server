import { SessionModel } from "./session.model.ts";
import type { ISession } from "./session.types.ts";
import { Types } from "mongoose";

export const SessionFactory = {
    create: (filmId: string, hallId: string, startTime: Date): ISession => {
        return new SessionModel({
            filmId: new Types.ObjectId(filmId),
            hallId: new Types.ObjectId(hallId),
            startTime,
            bookedSeats: [],
        });
    },
};