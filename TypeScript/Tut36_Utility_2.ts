//Omit, Exclude, Extract, NanNullable, Record

interface UserInterFace36{
    id:number,
    name:string,
    location:string,
    contact:string,
}
const UserData36: Omit<UserInterFace36, 'id'> = { //add excludable properties
    name:'nik',
    location:'rewa',
    contact:'234'
}
//Exclude
type APIStatus = 'loading' | 'error' | 'sucess' |'pending';
let myVar36 :Exclude<APIStatus, 'pending'>;
myVar36 = 'error'
myVar36 = 'loading';
myVar36 ='sucess'
// myVar36 = 'pending'//can't use

//Extract
let myVar36_1 :Extract<APIStatus, 'error'|'sucess'>; //included
myVar36_1 = 'sucess'
myVar36_1 = 'error'

//NanNullable
//Exclude null and undefined
type AnyType = string | number | null |undefined | string []

var randomData:NonNullable<AnyType> = 234;
// var randomData1:NonNullable<AnyType> = null
// var randomData2:NonNullable<AnyType> = undefined
var randomData3:NonNullable<AnyType> = 'string'
//watch video for record, it converts type into an object