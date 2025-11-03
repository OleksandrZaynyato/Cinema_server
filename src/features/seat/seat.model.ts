import { Schema, model } from "mongoose";
import { ISeat } from "./seat.types";

const seatSchema = new Schema<ISeat>({
    row: { type: Number, required: true },
    number: { type: Number, required: true },
    isVip: { type: Boolean, default: false },
});

export const SeatModel = model<ISeat>("Seat", seatSchema);
