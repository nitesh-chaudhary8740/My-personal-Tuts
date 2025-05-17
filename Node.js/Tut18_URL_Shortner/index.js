import express from 'express';
import path from 'path';

import { router } from './routes/url.js';
import { connectionDB } from './connection/connection.js';
const app = express();
const PORT = 3001;
const DATABASE = 'PRACTICE_PROJECTS';
const DB_URL = `mongodb://127.0.0.1:27017/${DATABASE}`;
app.set("view engine",'ejs');
app.set('views',path.resolve('./views'))

app.use(express.urlencoded({extended:false}))
async function startServer(){
    await connectionDB(DB_URL).then(()=>{
        console.log("connected to DB")
    }).catch((error)=>{
        console.log("error "+error)
    });
    app.use('/',router)
    app.listen(PORT,()=>{
        console.log(`listening to PORT-${PORT}`)
    })
}
startServer();
