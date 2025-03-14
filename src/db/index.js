import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(connectionInstance.connection.db.databaseName);
        // console.log("Database connected successfully");
    } catch (error) {
        console.log("Database Connection Error: ", error);
        process.exit(1);
    }
};

export default connectDB