//important
const express = require("express");
const users = require("./MOCK_DATA.json")
const file = require("fs");

const app =express();
const PORT = 3000;

//Headers: Extra information or meta-data about req and response
// middlewares
app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{
console.log("Middleware 1")
file.appendFile("log.txt",`${Date.now()}: ${req.ip} ${req.method} ${req.path} \n`,(err,data)=>{
  next();
})
})


//routes
//best practice to write custom header is use X-custom heador 'x',
//  there are also built in error, X use to distinct the custom headers from built in
app.get("/api/user",(req,res)=>{
  res.setHeader('name','nik');// setting response headers
  console.log(req.headers);//getting request headers
    return res.json(users);
})
app.get("/user",(req,res)=>{ 
 
    const html = `<ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>`
    res.send(html);
})

app.route("/user/:id").get((req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(user=>user.id===id);
    res.json(user); 
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