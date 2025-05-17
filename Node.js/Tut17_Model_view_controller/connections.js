const mongoose = require('mongoose');

//  mongoose.connect("mongodb://127.0.0.1:27017/testServer1_DataBase")
// .then(()=>console.log("mongoDB.connected"))
// .catch(error=> console.log("mongoDB error: ", error));
// const mongoose = require('mongoose');



const DB_CONNECTION = async(url)=>{

  return   mongoose.connect(url,{serverSelectionTimeoutMS:5000});
   
}

//mongoose.connect returns a promise
module.exports = DB_CONNECTION;