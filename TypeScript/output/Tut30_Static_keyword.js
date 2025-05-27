"use strict";
class Company {
    static staticName = 'Static Name';
    static staticMethod() {
        return Company.staticName;
    }
}
//static properties and method cannot be accessed by class instance
console.log(Company.staticMethod());
console.log(Company.staticName);
