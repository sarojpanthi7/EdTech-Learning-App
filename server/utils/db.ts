import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl: string = process.env.MONGO_URI || '';

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(dbUrl);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error occurred while connecting to database");
        setTimeout(connectDb, 5000);
    }
};

export default connectDb;
