import { Schema, model, Document } from 'mongoose';
import type { FilmInput } from './film.types.ts';

export interface FilmDocument extends FilmInput, Document {}

const filmSchema = new Schema<FilmDocument>({
    title: { type: String, required: true, unique: true },
    imageUrl: String,
    trailerUrl: String,
    isShown: { type: Boolean, default: true },
}, { timestamps: true });

export default model<FilmDocument>('Film', filmSchema);
