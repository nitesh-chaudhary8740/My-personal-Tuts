//Enum: a data type that allows you to define a set of named constants
enum gender {
    male ="male",
    female = "female",
    other = "other"
}
let myGender:gender = gender.male;
// let myGender1:gender = 'new gender'//can't assign any other value, which is not in set of gender enum contants
console.log(myGender)
console.log(typeof gender.female)