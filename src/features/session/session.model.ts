// import { Schema, model, Types } from 'mongoose';
// import { Seat } from '../../types/seat.types.ts';
//
// const seatSchema = new Schema<Seat>({
//     row: Number,
//     number: Number,
//     isTaken: { type: Boolean, default: false },
// });
//
// const sessionSchema = new Schema({
//     movie: { type: Types.ObjectId, ref: 'Movie', required: true },
//     hall: { type: Types.ObjectId, ref: 'Hall', required: true },
//     startTime: { type: Date, required: true },
//     seats: [[seatSchema]], // масив рядів і місць
// }, { timestamps: true });
//
// export const Session = model('Session', sessionSchema);


import { Schema, model } from "mongoose";
import type { ISession } from "./session.types.ts";

const bookedSeatSchema = new Schema({
    row: { type: Number, required: true },
    number: { type: Number, required: true },
});

const sessionSchema = new Schema<ISession>({
    filmId: { type: Schema.Types.ObjectId, ref: "Film", required: true },
    hallId: { type: Schema.Types.ObjectId, ref: "Hall", required: true },
    startTime: { type: Date, required: true },
    bookedSeats: { type: [bookedSeatSchema], default: [] },
});

export const SessionModel = model<ISession>("Session", sessionSchema);