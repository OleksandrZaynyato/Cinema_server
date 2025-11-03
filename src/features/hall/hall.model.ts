// import { Schema, model } from 'mongoose';
//
// const hallSchema = new Schema({
//     name: { type: String, required: true },
//     rows: { type: Number, required: true },
//     seatsPerRow: { type: Number, required: true },
// }, { timestamps: true });
//
// export const Hall = model('Hall', hallSchema);


import { Schema, model } from "mongoose";
import type { IHall } from "./hall.types.ts";

const seatSchema = new Schema({
    row: { type: Number, required: true },
    number: { type: Number, required: true },
    isVip: { type: Boolean, default: false },
});

const hallSchema = new Schema<IHall>({
    name: { type: String, required: true },
    seats: { type: [seatSchema], required: true },
});

export const HallModel = model<IHall>("Hall", hallSchema);