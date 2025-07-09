import http from 'node:http'

const server2 = http.createServer((request,response)=>
    {
        response.writeHead(200,{'content-type':'text/html'});
        response.write('Nik1')
        response.write('Nik2')
        response.write('Nik3')
        
        response.write(buffer); // Buffer
        response.write(request.url)

        response.end('<h1>server response generated</h2>')
    }
).listen(3000,()=>{console.log('my-sever')});

