let score = 33;
console.log(typeof(score))//as method 
console.log(typeof score)//as operator
let str = "343xyz"
let convertStrIntoNumber = Number(str);
console.log("type of "+convertStrIntoNumber+" is: " +typeof(convertStrIntoNumber))
//type is Number value is NaN (in case of string)
//and undefined is also NaN
let nullValue = null;
let convertNullToNumber = Number(nullValue);
console.log("type of "+convertNullToNumber+" is: " +typeof(convertNullToNumber))

let bool = 0 //null, undfined, and "" are false 
console.log(Boolean(bool))
console.log(typeof(String(null)) + " "+String(null))

