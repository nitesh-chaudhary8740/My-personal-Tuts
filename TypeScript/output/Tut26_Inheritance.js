"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    logIn(name, password) {
        if (name && password) {
            return `student login`;
        }
        else {
            return `not logged in`;
        }
    }
}
exports.Auth = Auth;
class Student extends Auth {
    // logIn(name:string,password:string){
    //     if(name && password){
    //         return `student login`
    //     }
    //     else{
    //         return `not logged in`
    //     }
    // }
    result(marks) {
        if (marks > 33) {
            return `pass`;
        }
        else {
            return `fail`;
        }
    }
}
class Teacher extends Auth {
    // logIn(name:string,password:string){
    //     if(name && password){
    //         return `student login`
    //     }
    //     else{
    //         return `not logged in`
    //     }
    // }
    subject(subject) {
        return `he/she teaches ${subject}`;
    }
}
