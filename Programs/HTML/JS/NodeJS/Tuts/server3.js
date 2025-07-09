import http from'http';
import { url } from 'inspector';
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
  
   const q =  url.parse(req.url,true).query;
   const queryText =  q.year+' '+q.month;
   res.end(`<h1>${queryText}</h1>`)
}).listen(3000,()=>{console.log("server is running at 3000" )})