import express from 'express';//express
import path from 'path';//path module for directory paths 
import { connectionDB } from './connection/connection.js'; //Database connection
//third-party middleware
import cookieParser from 'cookie-parser';//this middleware use to parse cookie data
//custom middlewares
import { restrictToSignedUserOnly,redirectToSignedUserOnly } from './middlewares/auth_middleware.js';
//router Modules
import { urlRouter } from './routes/url_routes.js';
import { userRouter } from './routes/user_routes.js';
import {staticRouter} from './routes/static_routes.js';

const app = express();
const PORT = 3001;
const DATABASE = 'PRACTICE_PROJECTS';
const DB_URL = `mongodb://127.0.0.1:27017/${DATABASE}`;
app.set("view engine",'ejs');//setting configuration of view engine
app.set('views',path.resolve('./views'))//config views absolute directory 
app.use(express.static('public'));//a built-in middleware which use to specify where my static files are stored
app.use(express.urlencoded({extended:false}))//parse req.body(html-form data) in object structure
app.use(cookieParser())//cookie-parser a function which returns the middleware function
async function startServer(){
    await connectionDB(DB_URL).then(()=>{
        console.log("connected to DB")
    }).catch((error)=>{
        console.log("error "+error)
    });
    app.use('/url',restrictToSignedUserOnly,urlRouter)//using inline middleware
    app.use('/user',userRouter)
    app.use('/',redirectToSignedUserOnly,staticRouter)
    app.listen(PORT,()=>{
        console.log(`listening on PORT-${PORT}`)
    })
}
startServer();
