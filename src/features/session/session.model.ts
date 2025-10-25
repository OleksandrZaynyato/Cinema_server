import { Schema, model, Types } from 'mongoose';
import { Seat } from '../../types/seat.ts';

const seatSchema = new Schema<Seat>({
    row: Number,
    number: Number,
    isTaken: { type: Boolean, default: false },
});

const sessionSchema = new Schema({
    movie: { type: Types.ObjectId, ref: 'Movie', required: true },
    hall: { type: Types.ObjectId, ref: 'Hall', required: true },
    startTime: { type: Date, required: true },
    seats: [[seatSchema]], // масив рядів і місць
}, { timestamps: true });

export const Session = model('Session', sessionSchema);
