//string interpolation
const str = 'string'
console.log(`this is string poloation mordern way to write string ${str}`);
//define string through String constuctor
const strObj = new String('String Object');
console.log(strObj[0]);//0 th index;
console.log(strObj.__proto__)//prototype of string object
console.log(strObj.__proto__.toUpperCase())//we directly access prototype functions
console.log(strObj.toUpperCase())
console.log(strObj.charAt(3));
console.log(strObj.indexOf('obj'));
console.log(strObj.indexOf('Obj'));
const newString = strObj.substring(1,5);//1-index included , 5th index is excluded
//substring consider negative index as 0
console.log(newString)
const newSlicedString = strObj.slice(-1,5);//slice contains negative index but substring don't, 
const containSpace = "    needTRim   ";
const trimmedValue = containSpace.trim();
console.log(trimmedValue)
const replacedValue = strObj.replace('ject',' replaced-part')
console.log(replacedValue)
console.log(strObj.includes('String'))
const slpitFromDash = 'Hello-everyone-'
console.log(slpitFromDash.split('-',1))//args(splitter,limit)
console.log(slpitFromDash.split('-'))
const slpitFromEmptyStr = 'Hello everyone';
console.log(slpitFromEmptyStr.split())//same string
console.log(slpitFromEmptyStr.split(""))//
//my rough

console.log(strObj.toString())//to access the value of string object
//with basic objects 
const myObj = { name: "Alice", age: 30 };
console.log(myObj.toString()); // Output: [object Object]
//with array
const myArray = [1, 2, "hello", true];
console.log(myArray.toString(), typeof(myArray.toString())); // Output: 1,2,hello,true
//with numbers
const num = 123;
console.log(num.toString());       // Output: "123"
console.log(num.toString(2),typeof(num.toString(2)));      // Output: "1111011" (binary)
console.log(num.toString(16));     // Output: "7b" (hexadecimal)
//with booleans
const isTrue = true;
const isFalse = false;
console.log(isTrue.toString());  // Output: "true"
console.log(isFalse.toString()); // Output: "false"
//with function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet.toString());
/* Output (may vary slightly):
function greet(name) {
  return `Hello, ${name}!`;
}
*/

//with dates
const now = new Date();
console.log(now.toString()); // Output (example): "Wed May 14 2025 15:11:00 GMT+0530 (India Standard Time)"

//with symbols
const mySymbol = Symbol("myKey");
console.log(mySymbol.toString()); // Output: "Symbol(myKey)"
const person = {
  name: "Alice",
  age: 30,
  toString: function() { //overriding the toString method for custum string representaion
    return `${this.name} is ${this.age} years old.`;
  }
};
console.log(person.toString()); // Output: Alice is 30 years old.
//toString method is used for textual representation of object

//toString() return textual form of object
//but for primitive types it does "boxing"
/**
 * JavaScript's "Boxing": To make this work, JavaScript temporarily performs a process called "boxing". It implicitly wraps the primitive number 12 into its corresponding wrapper object, which is an instance of the Number object. This Number object has the toString() method.
 */
let num1 = 12;
console.log(num1.toString(),typeof(num1.toString()))//num is behaving like object which is equivalent to new Number(num1)