const http = require("http");
const file = require("fs");
const server = http.createServer(
    (request,response)=>{ //requeslistener callback
        //this callback contains request(this param contains all the info related to request), and response(this param contains all the info regard-ing response)
        console.log("Request recevied");
        const log = `${Date.now()} new request received URL: ${request.url}  \n`;
        file.appendFile("log.txt",log,(error,data)=>{            
            switch(request.url.toLowerCase()){
                case '/': response.end("This is homepage");
                break;
                case '/about': response.end("This is About");
                break;
                case '/contact': response.end("This is Contact");
                break;
                default: response.end("404 page not found");
            }
            // response.end("Hello from server hey again");
        })
        // console.log(request.headers)
        // response.end("Ending the server with this response")//ending response with a string msg       
});
server.listen(3000,()=>{
    console.log("listening in server 3000");
})