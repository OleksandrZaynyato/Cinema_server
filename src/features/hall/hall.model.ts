import { Schema, model } from 'mongoose';

const hallSchema = new Schema({
    name: { type: String, required: true },
    rows: { type: Number, required: true },
    seatsPerRow: { type: Number, required: true },
}, { timestamps: true });

export const Hall = model('Hall', hallSchema);
