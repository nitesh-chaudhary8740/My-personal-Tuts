import file from 'fs';
// file.writeFileSync("./file.txt","This is file content");
//write a file if not exists create new (filename,file content);//blocking
//write a file if not exists create new (filename,file content);//blocking
// file.writeFile("./file.txt","this is asynchronous",(error)=>{console.log(error)})
//async file write takes callback//non blocking

//----------------Reading file Synchronously and Asynchronously---------------
const readedData1 = file.readFileSync("./file1.pdf");
console.log(readedData1);//buffer reading encoding(by default)
const readedData2 = file.readFileSync("./file1.pdf","utf8")//reading synchronously passed utf-8 encoding 
console.log(readedData2);
//unlike synchronous fucntion, async doesn't return any value, rather it 
// takes a callback, this callback function return error or value that we expected to return when async function complete its task successfully
file.readFile("./file1.pdf","utf-8",(err,result)=>{
    result?console.log("reading asynchronously: ",result):console.log(err);
})

//-------------Appending file synchronously and Asynchronously -----------------------
file.appendFileSync("./file.txt"," Appended line\n");

//------------------Copy --------------------------
// file.cp("./file.txt",'./copy1.txt',(err,result)=>{
//     // result?console.log("file is copied"):console.log("error: ",err);
//     if(err){
//         console.log("Error:",err)
//     }
//     else{
//         console.log("this is result: ",result)
//     }
// });

//------------------delete file--------------
// file.unlink('./copy1.txt',(err,result)=>{
//     // result?console.log("file is copied"):console.log("error: ",err);
//     if(err){
//         console.log("Error on delete:",err)
//     }
//     else{
//         console.log("delete successful: ",result)
//     }
// });

//------------------------------Statics of file-----------------
file.stat('./file.txt',(err,result)=>{
    console.log("file stats: ",result);
})

//------------------make directory-------------
file.mkdir("NewDir/recusiveDir/recDir2",{recursive:true},(err,res)=>{
    console.log(res);
});