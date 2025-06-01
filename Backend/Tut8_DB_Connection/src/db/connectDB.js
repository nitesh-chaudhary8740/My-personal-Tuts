import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`\n connected to MONGO_DB!! DB HOST: ${connectionInstance.connection.host}`)

} catch (error) {
    console.log("MONGO_DB Connection Error: ",error);
    process.exit(1)
}
}