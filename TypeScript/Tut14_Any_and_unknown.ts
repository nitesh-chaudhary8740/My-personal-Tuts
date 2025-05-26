//any and unknown
//any data type: is a data type which allows variable to hold any type of values.
//If we are not sure what kind of data will be returning
var value1:any
value1 = 'nik';
value1 = { hello:'saying... hello'}
//unknown
//it is similar to any but it is safer because it forces to type checking before performing
var value2:unknown;
value2 = 'nitesh1';
// console.log(value2.toUpperCase())//can't apply any property coz type in unknown
//it is forcing for typecheck
// if(value2 === value1){
//     console.log(value2.toUpperCase())
// }
// if(value2 === 0){
//     console.log(value2.toUpperCase())
// }
//both above if conditions are false typescript is even smart to check the conditions
// if(typeof value2 ==='string'){
//     console.log(value2.toUpperCase())
// }
if(value2 ==='string'){
    console.log('false value')
    console.log(value2.toUpperCase())
}
if(typeof value2 ==='string'){
    console.log('type check')
    console.log(value2.toUpperCase())
}