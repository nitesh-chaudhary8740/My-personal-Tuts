const express = require("express");
const users = require("./MOCK_DATA.json")
const file = require("fs");

const app =express();
const PORT = 3000;

// middlewares
app.use(express.urlencoded({extended:false}))// here is the middlewere/pluggin which help to enocde req.body

app.use((req,res,next)=>{
console.log("Middleware 1")
file.appendFile("log.txt",`${Date.now()}: ${req.ip} ${req.method} ${req.path} \n`,(err,data)=>{
  next();
})
// next()//
// req.myName = "nik";

// return res.json({ended:"middleware 1"})
})
app.use((req,res,next)=>{
  // console.log(req.myName)
console.log("Middleware 2")
next();
// return res.json({ended:"middleware 1"})
})


//routes
app.get("/api/user",(req,res)=>{ //api get
    return res.json(users);
})
app.get("/user",(req,res)=>{ //html data get
  // console.log("In get "cl+req.myName)
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
    const body =req.body;
    console.log(body);
    users.push({id:users.length+1,...body})
    file.writeFile("./MOCK_DATA.json",JSON.stringify(users),(error,data)=>{
        if(error){
            console.log(error)
        }
        else{
            return res.json({status:"success",id:users.length})
        }
    });

})
app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);
})