//Http methods:-
// 1.Get Request -> when user request data from server, get request read by server and response will resturn (browser by default do get request);
// 2. Post Request -> when you want to set ad mutate some data in server (like passing filled form data to server for entering that data in server database)
// 3. put -> ulpoading file (photo or file ) in server
// 4. patch -> altering the existing entry;
// 5. Delete -> delete data from server;
const http = require("http");
const file = require("fs");
const urlParser = require("url")
const server = http.createServer(
    (request,response)=>{ //requeslistener callback
        //this callback contains request(this param contains all the info related to request), and response(this param contains all the info regard-ing response)
        console.log("Request recevied");
        if(request.url==="/favicon.ico"){
            return response.end();
        }
      
        else{
            const log = `${Date.now()} new request received URL: ${request.url} Method: ${request.method}  \n`;
            const myurl = urlParser.parse(request.url,true);
            console.log(myurl);
            file.appendFile("log.txt",log,(error,data)=>{            
                switch(myurl.pathname.toLowerCase()){
                    case '/': response.end("This is homepage");
                    break;
                    case '/about': response.end("user id " + myurl.query.userid + "Name is "+myurl.query.myname);
                    break;
                    case '/contact': response.end("This is Contact");
                    break;
                    case "/signup" : 
                    if(request.method==="GET") response.end("this is signup form");
                    else if( request.method === "POST") {
                        // db query
                        response.end("sucess");
                    }
                    break;
                    default: response.end("404 page not found");
                }
                // response.end("Hello from server hey again");
            })
        }
   
        // console.log(request.headers)
        // response.end("Ending the server with this response")//ending response with a string msg       
});
server.listen(3000,()=>{
    console.log("listening in server 3000");
})