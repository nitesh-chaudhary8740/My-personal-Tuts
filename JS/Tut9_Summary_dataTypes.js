//Primitive
String
Number
Boolean
null
undefined
Symbol
BigInt
//reference type (Non-Primitive)
Array
Object
Function
// const add = new Function('a', 'b', 'return a + b;');
// console.log(add(5, 2)); // Output: 7
const mysymbol = Symbol('hey this is symbol')
const mysymbol1 = Symbol('hello')
const myObj = {
    hey:mysymbol,
    hello:Symbol('sayHello'),
    [mysymbol1]:'storing value',
    // Symbol('symbolKey'):'this is symbol value'
}
myObj[mysymbol1]='overwritting the value'
myObj.mysymbol1 = 'new value'
console.log(myObj.hey)
console.log(myObj.hello)
console.log(myObj[mysymbol1])
console.log(myObj[mysymbol])
console.log(myObj.mysymbol1)
console.log(myObj)
console.log(typeof {key:'value'})
console.log(typeof [,3,'3'])
console.log(typeof function(){console.log()})

