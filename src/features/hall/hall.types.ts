import { Document } from "mongoose";

export interface ISeatInHall {
    row: number;
    number: number;
    isVip: boolean;
}

export interface IHall extends Document {
    name: string;
    seats: ISeatInHall[];
}