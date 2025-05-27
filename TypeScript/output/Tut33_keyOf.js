"use strict";
//The keyOf keyword in TypeScript is used to get the keys of a type
// as a union of string
let str33 = 'this is string';
console.log(str33);
let personData = {
    name: 'sayhello',
    age: 34,
    isEmp: false
};
let person33_1 = 'name';
console.log(personData[person33_1]);
let person33_2 = 'age';
console.log(personData[person33_2]);
let person33_3 = 'isEmp';
console.log(personData[person33_3]);
personData[person33_2] = 345;
console.log(personData.age);
// type mytype = string;
// let a33:mytype ='hkdfsh'
