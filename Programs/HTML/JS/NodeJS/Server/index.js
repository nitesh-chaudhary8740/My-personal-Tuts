import http from 'node:http';
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.warn("dir",__dirname);
console.warn("file",__filename);
console.log(__dirname);  // Outputs the directory of the current file
console.log(__filename); // Outputs the full path of the current file
// import { __esModule } from '@testing-library/jest-dom/dist/matchers';
const myServer = http.createServer((req,res)=>{
console.log('New req rec');
const log = `${Date.now()}: ${req.url}: new request recieved\n`
// console.log(__filename)
// console.log(__dirname)
// console.log(__esModule)
console.log(process.pid)
console.log(process.version)
fs.appendFile('log.txt',log,(err,data)=>{
    if(err){
        res.end(err);
    }
    else{
        switch(req.url){
            case '/':res.end('This is homepage');
            break
            case '/about':res.end('This is about page');
            break;
            case '/contact':res.end('This is contact');
            default: res.end('404 not found')
        }
    }
    
    // res.end("Hello from server: ", data)
}) //do asynchronously to prevent the blocking of code

}).listen(3000,()=>{
    console.log("Server Started at 3000")
})