/**
 * these are the imports
 */
const express = require("express");
const app =express();
const path =require('path')
const userRouter = require('./routes/userRouters')
const staticRouter = require('./routes/staticRoutes')
const DB_CONNECTION = require('./connections');
const writeLogs = require('./middlewares/middleware')

// const variables
const PORT = 3000;
const DATABASE_URL = "mongodb://127.0.0.1:27017/testServer2_DataBase"

//middlewares
app.set("view engine","ejs")
app.set('views',path.resolve("./views"))
app.use(express.urlencoded({extended:false}))

app.use(writeLogs('log.txt'))


const startServer = async () => {
  try {
    await DB_CONNECTION(DATABASE_URL).then(()=>{console.log("connected to database")});
    
    app.use('/user',userRouter) 
    app.use('/',staticRouter) 

   
    app.listen(PORT, () => {
      console.log(`server is started at ${PORT}`);
    });
  } catch (err) {
    console.log(err + " timeout");
    process.exit(1); 
  }
}

startServer();
