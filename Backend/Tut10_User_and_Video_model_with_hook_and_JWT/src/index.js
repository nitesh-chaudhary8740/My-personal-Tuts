import { configDotenv } from "dotenv";
import { connectDB } from "./db/connectDB.js";
import app from "./app.js";
configDotenv();
(async()=>{
    await connectDB();
    app.listen(process.env.PORT,()=>{
        console.log(`server is listeng in port ${process.env.PORT}`)
    })

})();

