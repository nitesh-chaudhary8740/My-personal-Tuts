"use strict";
//null and undefined are primitive datatype
var nullData = null;
console.log(typeof nullData);
// nullData = 'not null now'
console.log(typeof nullData);
var undefinedData = undefined;
console.log(undefinedData == nullData);
console.log(undefinedData === nullData);
console.log(undefinedData);
undefinedData = 34;
console.log(undefinedData);
undefinedData = 'string value';
console.log(undefinedData);
