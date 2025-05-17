//important
const express = require("express");
const file = require("fs");
const mongo = require("mongoose");
const app =express();
const PORT = 3000;


//middlewares
app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{

console.log("Middleware 1",req.body)
file.appendFile("log.txt",`${Date.now()}: ${req.ip} ${req.method} ${req.path} \n`,(err,data)=>{
  next();
})
})

//connection to mongoDB
mongo.connect("mongodb://127.0.0.1:27017/testServer1_DataBase")
.then(()=>console.log("mongoDB.connected"))
.catch(error=> console.log("mongoDB error: ", error))
//schema
const userSchema = new mongo.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    jobTitle :{
        type:String
    },
    gender :{
        type:String
    },

}, {timestamps:true})
//model

const User = mongo.model('User',userSchema);
//routes

 //to read all data as json
app.get('api/showUsers',async(req,res)=>{
    const allUserData = await User.find({})
    return res.status(200).json(allUserData);
})
//display fullname and email in html res
app.get('/users',async(req,res)=>{
    const allUserData = await User.find({})
    const html = `<ul>${allUserData.map(user=>`<li> <b>Name: </b>${user.firstName} ${user.lastName} <b>Email: </b> ${user.email} `).join("")} </ul>`
    return res.status(200).send(html);
})
//post request to create new user
app.post("/api/user",async(req,res)=>{
    const body =req.body;
    if(!body || 
    !body.first_name||
    !body.last_name ||
    !body.email ||
    !body.gender||
    !body.job_title){
        return res.status(400).json({msg:"All fields are required"});
    }
   const result =  await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    })
    console.log('result: ',result);
   return res.status(201).json({msg:'user created!'})
})
app.route("/api/user/:email").patch(async (req, res) => {
    try {
      const body = req.body;
      if (!body || !body.email) {
        res.status(400).json({ msg: 'Email is required!' });
        return;
      }
  
      const getUserByEmail = await User.updateOne({ email: req.params.email }, {
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
      });
  
      if (getUserByEmail.matchedCount === 0) { //matchedCount : if filter not match any value it will return 0
        res.status(404).json({ msg: 'User not found!' });
        return;
      }
  
      res.status(200).json({ msg: 'Successfully updated!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error updating user!' });
    }
  });
  app.route("/api/user/:email").delete(async (req, res) => {
    try {
      const getUserByEmail = await User.deleteOne({ email: req.params.email });
  
      if (getUserByEmail.deletedCount === 0) {
        res.status(404).json({ msg: 'User not found!' });
        return;
      }
  
      res.status(200).json({ msg: 'Successfully Deleted!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error in deleting the user!' });
    }
  });
app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);
})