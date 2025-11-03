import { SessionModel } from "./session.model.ts";
import type { ISession } from "./session.types.ts";

export const SessionLogic = {
    async getAll() {
        return SessionModel.find().populate("filmId hallId");
    },

    async getById(id: string) {
        return SessionModel.findById(id).populate("filmId hallId");
    },

    async bookSeats(sessionId: string, seats: { row: number; number: number }[]) {
        const session = await SessionModel.findById(sessionId);
        if (!session) throw new Error("Session not found");

        for (const seat of seats) {
            const taken = session.bookedSeats.some(
                (s) => s.row === seat.row && s.number === seat.number
            );
            if (taken) throw new Error(`Seat row:${seat.row} number:${seat.number} already booked`);
        }

        session.bookedSeats.push(...seats);
        await session.save();

        return session;
    },
};