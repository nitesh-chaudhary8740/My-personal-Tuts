// const num= Number(11);

// console.log(typeof num,num)
// const num1 = new Number(12);

// console.log(typeof num1,num1)


// Number.protoype Functions
// 1.toString(radix):
const num = 255;
console.log(num.toString());     // Output: "255" (base 10)
console.log(num.toString(2));    // Output: "11111111" (binary)
console.log(num.toString(16));   // Output: "ff" (hexadecimal)

// 2.toFixed(digits)
const pi = 3.14159;
console.log(pi.toFixed(2));    // Output: "3.14"
console.log(pi.toFixed(0));    // Output: "3" (rounds to nearest integer)
const largeNum = 1.23e+20;
console.log(largeNum.toFixed(2)); // Output: "123000000000000000000.00" (can be surprising with large numbers)

// 3. toPrecision(precision)

const num1 = 123.456;
console.log(num1.toPrecision(5)); // Output: "123.46" (rounds to 5 significant digits)
console.log(num1.toPrecision(2)); // Output: "1.2e+2" (exponential notation)
const smallNum = 0.001234;
console.log(smallNum.toPrecision(3)); // Output: "0.00123"

// 4. toExponential(fractionDigits)
const num2 = 123.45;
console.log(num2.toExponential());      // Output: "1.2345e+2"
console.log(num2.toExponential(2));   // Output: "1.23e+2"
const small2Num = 0.0000123;
console.log(small2Num.toExponential()); // Output: "1.23e-5"

// 5.toLocaleString(locales, options)
const num3 = 12345.67;
console.log(num3.toLocaleString());             // Output (locale-dependent): "12,345.67" (in many English locales)
console.log(num3.toLocaleString('de-DE'));      // Output (German locale): "12.345,67"
console.log(num3.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // Output: "$12,345.67"
console.log(num3.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })); // Output: "￥12,346" (note rounding)

console.log(Number("23.25e+1")+500)
//Number. MAX/MIN/MAX_SAFE_INTEGER/MIN_SAFE_INTEGER
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
//========================================Math Library=============================
//explore note section NewJS #3
// console.log(Math.random())//returns value from 0 to 1
// console.log(Math.floor(Math.random()*20-10+1)+10)
Math.floor(Math.random() * (max - min + 1)) + min;
// return Math.floor("random",Math.random(
// )*5)//this line will not cause error but not execute either
