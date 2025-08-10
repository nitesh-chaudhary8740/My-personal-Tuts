import { configDotenv } from "dotenv";
import { connectDB } from "./db/connectDB.js";
configDotenv({
    path:"../.env"
});
connectDB();

