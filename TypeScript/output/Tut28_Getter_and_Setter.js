"use strict";
//getter are setter methods use for retrieve and modify the property of object
class EmpInfo {
    _name;
    _email = ""; //for set value must be intialized
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
}
const emp1 = new EmpInfo('nik');
console.log(emp1.email);
console.log(emp1.name);
emp1.email = 'nik@mail'; //get and set are not use as calling expression , just use them property
console.log(emp1.name);
console.log(emp1.email);
