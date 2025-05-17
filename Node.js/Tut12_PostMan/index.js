const express = require("express");
const users = require("./MOCK_DATA.json")
const file = require("fs");
const { json } = require("stream/consumers");
const { resolve } = require("path");
const app =express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}))// here is the middlewere/pluggin which help to enocde req.body
app.get("/api/user",(req,res)=>{ //api get
    return res.json(users);
})
app.get("/user",(req,res)=>{ //html data get
    const html = `<ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>`
    res.send(html);
})

app.route("/user/:id").get((req,res)=>{//particular id data as json
    const id = parseInt(req.params.id);
    const user = users.find(user=>user.id===id);
    res.json(user); 
})
.put((req,res)=>{
    const id = parseInt(req.params.id);
    const body = req.body;
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { id: id, ...body };
      file.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error writing to file");
        } else {
          return res.json({ status: "success", id: id });
        }
      });
    } else {
      res.status(404).send("User not found");
    }
})
.delete((req,res)=>{
    const id = parseInt(req.params.id);
    const body = req.body;
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index,1);
      file.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error writing to file");
        } else {
          return res.json({ status: "success", id: id });
        }
      });
    } else {
      res.status(404).send("User not found");
    }
}).patch((req,res)=>{
    const id = parseInt(req.params.id);
    const body = req.body;
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index]={...users[index],...body};
      file.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error writing to file");
        } else {
          return res.json({ status: "success", id: id });
        }
      });
    } else {
      res.status(404).send("User not found");
    }
})
/** it taken html form data from request and converted(encoded) into JSON and stored in req.body */
app.post("/api/user",(req,res)=>{
    const body =req.body;//all the data which send from client side is available on req.body?
    console.log(body);//body request.body 
    /** 
     here the 'req.body don't know what is the type of incoming data is that why(middlewere/pluggin) is used in express
     */

    //appending "req.body" data in "MOCK_DATA.json" file using "fs" module
    // const newUserData = {id:users.length+1,...body}; //it is creating new key with variable name
    // users.push({newUserData})
    users.push({id:users.length+1,...body})
    file.writeFile("./MOCK_DATA.json",JSON.stringify(users),(error,resolve)=>{
        if(error){
            console.log(error)
        }
        else{

            return res.json({status:"success",id:users.length})
        }
    });

})
// app.put("/user/:id",(req,res)=>{
//     const id = parseInt(req.params.id);
//     const body = req.body;
//     const index =  users.findIndex(user=>user.id===id);
//    if(index!==-1){
//     users[index]={id:id,...body}
//     file.writeFile("./MOCKDATA.json",JSON.stringify(users),(err,resolve)=>{
//         if(error){
//             console.log(error)
//         }
//         else{

//             return res.json({status:"success",id:id})
//         }
//     })

//    }
//    else{
//     res.status(404).send("user not found");
//    }
// })



app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);
})