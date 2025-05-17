const User = require('../models/user');
// const app = require('express')
// app.set("view engine","ejs")
// app.set('views',path.resolve('../views'))

async function addUser(req,res) {

 return new Promise((resolve, reject) => {
    if (!req.body ||!req.body.first_name ||!req.body.last_name ||!req.body.email || !req.body.gender || !req.body.job_title){
            reject(res.status(400).json({msg:'Invalid request'}))
    }
    else{
        resolve(req.body)
    }
 }).then((result)=>
    User.create({ // User.create method returns a promise which resolve with created document object and reject with error object
        firstName:result.first_name,
        lastName:result.last_name,
        email:result.email,
        gender:result.gender,
        jobTitle:result.job_title,
    })
 ).then((user)=>{
    console.log('user created: ',user)
    res.redirect('/showUsers');

 }).catch(err=>res.status(500).send('unable to add the user'))
}

async function showUsersData(req,res){
    const users = await User.find({});
      res.render('home',{users:users}) //in options we can pass many variables to view template(here home.ejs)
    }
async function addUsersData(req,res){
      res.render('addUser') //in options we can pass many variables to view template(here home.ejs)
    }
module.exports ={addUser,showUsersData,addUsersData}