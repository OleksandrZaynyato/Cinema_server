import {HallModel} from "./hall.model.ts";
import type {ISeatInHall} from "./hall.types.ts";

export const getAllHalls = async () => {
    const halls = await HallModel.find().exec();
    return halls;
}

export const createHall = async (hallData: { name: string; seats: ISeatInHall[]}) => {
    const newHall = new HallModel(hallData);
    const savedHall = await newHall.save();
    return savedHall;
}

export const getHallByName = async (name: string) => {
    const hall = await HallModel.findOne({ name }).exec();
    return hall;
}

export const updateHall = async (name: string, updateData: Partial<{ name: string; seats: ISeatInHall[]}>) => {
    const updatedHall = await HallModel.findOneAndUpdate({ name }, updateData, { new: true }).exec();
    return updatedHall;
}

export const deleteHall = async (name: string) => {
    const deletedHall = await HallModel.findOneAndDelete({ name }).exec();
    return deletedHall;
}