import { configDotenv } from "dotenv";
import { connectDB } from "./db/connectDB.js";
configDotenv();
connectDB();

