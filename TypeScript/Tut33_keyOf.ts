//The keyOf keyword in TypeScript is used to get the keys of a type
// as a union of string

//it is primarly used for type safety when working with Objects

type PersonT33 = {
    name:string,
    age:number,
    isEmp:boolean
}
let str33:string = 'this is string';
console.log(str33)
let personData:PersonT33={
    name:'sayhello',
    age:34,
    isEmp:false
}
type PersonKeysEnum = keyof PersonT33; // enum of keys of type Object(all keys will be get returned as string)
let person33_1:PersonKeysEnum = 'name';
console.log(personData[person33_1])
let person33_2:PersonKeysEnum = 'age';
console.log(personData[person33_2])
let person33_3:PersonKeysEnum = 'isEmp';
console.log(personData[person33_3])
personData[person33_2] = 345;
console.log(personData.age)
// type mytype = string;
// let a33:mytype ='hkdfsh'