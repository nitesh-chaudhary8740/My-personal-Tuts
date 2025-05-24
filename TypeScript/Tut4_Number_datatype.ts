/** Points to be covered
 * 1. Apply Number datatype
 * 2. Redeclare issue
 * 3. How to Add number with data type
 * 4. How to use binary and hexadecimal numbers
 * 5. Convert string to number
 * 6. Type interface with Number
 * 7. Decimal with Number Data type
 */
//declaration syntax: variableDefKeywords(let,var,const) var_name:data-type = value
var num1: number = 10;
var num1: number = 20; // var keyword's variables can be redeclared
let num2: number = 40;
let num3 = "28";
// let num2:number = 30; //let keyword's variables can't be redeclared
let result = num1 + num2 + num3; //result implicitily will be converted into string
// let result1: number = num1 + num2 + num3; //it will cause error here in TS result1 is explicitly defined as number
let result1: number = num1 + num2;
console.log(result);
console.log(result1);
//oct hexa binary prefix
var oct: number = 0o0007;
var hexa: number= 0xffff;
var bin: number = 0b0101010;
console.log(oct+ 10)
console.log(hexa +10)
console.log(bin + 10)
// conversions
var number1:number = 50;
var number2 = '60';
console.log(number1+number2)
var convertedNumber= +number2;//using + uniary operator
console.log('+ operator uniary at assignment ',convertedNumber+number1)
var convertedNumber = Number(number2)//Number() method
console.log('through Number() method ',convertedNumber+number1)
//or
console.log('Directyly used of uninary operator conversion',number1+ +number2)//dierectly using uniary operator

//============Type Interface=============
//It is use to store multiple types of values in variable
var data: number | string = 30;
console.log(typeof data, data)
data = 'nik';
console.log(typeof data, data)