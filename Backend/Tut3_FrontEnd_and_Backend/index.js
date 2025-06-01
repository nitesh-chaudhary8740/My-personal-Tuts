import express from 'express';
//change/add "type":"module" key in package.json
const app = express();
app.use(express.static('./FrontEnd/dist'))
//if directory not exists then go to the route, if index.html found in static dir or sub dir req-res will be end
//if not found req will be passed to the route
app.get('/',(req,res)=>{
    res.send("server is ready!")
})
app.get('/api/jokes',(req,res)=>{
    const joke = [
        {
            id:1,
            title:'A joke',
            content:'this is a joke',
        },
        {
            id:2,
            title:'Another joke',
            content:'this is another joke',
        }
    ];
   res.send(joke)

})
app.listen(3000,()=>{
    console.log("running on 3000 ")
})
