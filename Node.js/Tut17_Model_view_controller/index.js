/**
 * these are the imports
 */
const express = require("express");
const app =express();
const userRouter = require('./routes/userRouters')
const DB_CONNECTION = require('./connections');
const writeLogs = require('./middlewares/middleware')

// const variables
const PORT = 3000;
const DATABASE_URL = "mongodb://127.0.0.1:27017/testServer2_DataBase"

//middlewares
app.use(express.urlencoded({extended:false}))

app.use(writeLogs('log.txt'))

//db connection
const startServer = async () => {
  try {
    await DB_CONNECTION(DATABASE_URL);
    console.log("connected to Database!");
    app.use('/user', userRouter);
    app.listen(PORT, () => {
      console.log(`server is started at ${PORT}`);
    });
  } catch (err) {
    console.log(err + " timeout");
    process.exit(1); // Exit the process with a non-zero status code
  }
}

startServer();
