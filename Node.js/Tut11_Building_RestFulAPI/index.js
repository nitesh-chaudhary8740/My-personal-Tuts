const express = require("express");
const users = require("./MOCK_DATA.json")
const app =express();
const PORT = 3000;
app.get("/api/user",(req,res)=>{
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
.put((req,res)=>{})
.delete((req,res)=>{})

app.post("/user",(req,res)=>{
    return res.json({status:"pending"})
})


app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);
})