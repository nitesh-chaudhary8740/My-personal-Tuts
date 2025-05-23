const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter)
const myObj = {
    name:'nik',
    age:25,
    role:'MERN DEV'
}
const myDes = Object.getOwnPropertyDescriptor(myObj,'name')
console.log(myDes)
Object.defineProperty(myObj,'name',{
    value:'overwrite not allowed',
    writable:false,
    // enumerable:false
})
console.log(myObj)
const myDes1 = Object.getOwnPropertyDescriptor(myObj,'name')
console.log(myDes1);
myObj.name='new name'
console.log(myObj.name)
// Object.defineProperty(Math,"PI",{configurable:true})//can't do with bulit in constancts
// Object.defineProperty(Math,"PI",{value:'overwritten',writable:true})
// console.log(Math.PI)