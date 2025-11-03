import { Document, Types } from "mongoose";

export interface ISession extends Document {
    filmId: Types.ObjectId;     // посилання на Film
    hallId: Types.ObjectId;     // посилання на Hall
    startTime: Date;
    bookedSeats: { row: number; number: number }[];
}