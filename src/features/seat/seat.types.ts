import { Document } from "mongoose";

export interface ISeat extends Document {
    row: number;
    number: number;
    isVip: boolean;
}
