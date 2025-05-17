// const http = require("http");
const express = require("express")
const app = express(); // server handler
app.get("/",(request,response)=>{
    return response.end("This is Home page")
})
app.get("/about",(request,response)=>{
    return response.send("This is about page wala paga" + "hey" + request.query.name); //response.send return the markup
})
// http.createServer(app).listen(3000,()=>{
//     console.log("listenig the server at 3000");
// })
app.listen(3000, ()=>{
    console.log("Express is listen http module at 3000")
})