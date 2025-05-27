"use strict";
// A typeGuard in typescript is a technique used to narrow down the type of a variable,
// with in conditional block
//1. typeof (prefined)
//2. intanceof (class and prototypal functions)
//3. custom type (intetface,and cutsom types using type keyword)
let userData20 = 20;
if (typeof userData20 === 'number') {
    console.log('this is number');
}
else if (typeof userData20 === 'string') {
    console.log('this is string');
}
else {
    console.log('thhis is boolean');
}
function checkDataType(data) {
    if (typeof data === 'string') {
        console.log('this is string');
    }
    else {
        console.log('this is number');
    }
}
checkDataType('df');
class Product31 {
}
class Order31 {
}
const p1 = new Product31();
const o1 = new Order31();
function checkDetails(data) {
    if (data instanceof Product31) {
        console.log('this is product');
    }
    else {
        console.log('this is order');
    }
}
checkDetails(o1);
const userData31 = {
    name: 'nik',
    city: 'rewa'
};
const userInfo31 = {
    id: 123,
    email: 'nik@mail.com'
};
function checkUserData31(data) {
    if (data.name != undefined) {
        console.log('this is user data', data.name);
    }
    else {
        console.log('this is userinfo', data.email);
    }
}
checkUserData31(userInfo31);
checkUserData31(userData31);
