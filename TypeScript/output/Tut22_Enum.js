"use strict";
//Enum: a data type that allows you to define a set of named constants
var gender;
(function (gender) {
    gender["male"] = "male";
    gender["female"] = "female";
    gender["other"] = "other";
})(gender || (gender = {}));
let myGender = gender.male;
// let myGender1:gender = 'new gender'//can't assign any other value, which is not in set of gender enum contants
console.log(myGender);
console.log(typeof gender.female);
