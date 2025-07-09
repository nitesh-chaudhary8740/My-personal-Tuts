import { error } from 'node:console'
import fs from 'node:fs'
// fs.writeFileSync('./test.text',"Content of the file")
// fs.writeFileSync('./test.text',"New content of the file")//overwritten the content
//async
// fs.writeFile('./test.text',"New async content of the file",(error)=>{})//overwritten the content
//reading file sync
const decodedResult = fs.readFileSync('./readfile.text','utf8')//@params (file, decoding-standard)
console.log(decodedResult);
//reading file async
fs.readFile('./readfile.text','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result)
    }

})

//apend the data in file
//sync way
// let line = 1; //useless
fs.appendFileSync("./test.text",`hello\n`)
// fs.cpSync("./test.text","copy.text")//for copying
// fs.unlinkSync('./copy.text')//for deleteing
const stats=fs.statSync("./test.text") //make dir
console.log(stats)
fs.mkdirSync("Newdir/subdir",{recursive:true})//to make subsequent dir use {recursive:true}
