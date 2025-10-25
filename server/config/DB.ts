import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("MongoDB connected ✅");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("MongoDB connection error ❌:", error.message);
        } else {
            console.error("MongoDB connection error ❌:", error);
        }
        process.exit(1);
    }
}