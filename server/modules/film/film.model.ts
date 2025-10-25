import { Schema, model, Document } from 'mongoose';
import type { FilmInput, Session, Seat } from './film.types.ts';

export interface FilmDocument extends FilmInput, Document {}

const seatSchema = new Schema<Seat>({
    row: Number,
    number: Number,
    isTaken: { type: Boolean, default: false },
});

const sessionSchema = new Schema<Session>({
    time: { type: Date, required: true },
    hall: { type: String, required: true },
    seats: { type: [[seatSchema]], required: true },
});

const filmSchema = new Schema<FilmDocument>({
    title: { type: String, required: true, unique: true },
    imageUrl: String,
    trailerUrl: String,
    sessions: [sessionSchema],
    isShown: { type: Boolean, default: true },
}, { timestamps: true });

export default model<FilmDocument>('Film', filmSchema);
