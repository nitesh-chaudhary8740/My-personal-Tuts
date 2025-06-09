import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))//extended true: parse object inside object
app.use(express.static("public"));
app.use(cookieParser())
//routes import
import userRouter from './routes/user.routes.js'
app.use('/api/v1/',userRouter)// '/prefix-api/vi/user, then any routes which are connected to userRouter'
export default app;