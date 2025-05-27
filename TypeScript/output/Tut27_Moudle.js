"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tut26_Inheritance_1 = require("./Tut26_Inheritance");
var userInfo = {
    name: 'nik',
    age: 34,
    email: 'mymail@mail.com',
    password: '234abc'
};
class User extends Tut26_Inheritance_1.Auth {
}
const user1 = new User();
console.log(user1.logIn(userInfo.name, userInfo.password));
