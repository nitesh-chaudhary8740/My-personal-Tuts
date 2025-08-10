import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}));//for accepting the json request in server
app.use(express.urlencoded({extended:true,limit:"16kb"}))//extended true: parse object inside object//data in x-www-form in url string
app.use(express.static("public"));//serve static files 
app.use(cookieParser())//parse the cookies

export default app;