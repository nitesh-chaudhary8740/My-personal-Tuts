//Type use to define the structure of object and function
var empData:{name:string,email:string} = {
    name:'nik',
    email:'niksindia@mail.com'
}
//instead of defining structure along with declaration of variable, we can declare type struncture
//using type keyword and can be use with any declaration or definiton
type myType1 = {name:string,email:string}
type myType2 = {age:number}
const newObj:myType1 &myType2 = {
    name:'nik',
    email:'myemail@mail.com',
    age:45
}
