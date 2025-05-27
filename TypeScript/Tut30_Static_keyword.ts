class Company{
    static staticName:string ='Static Name';
    static staticMethod():string{
            return Company.staticName;
    }
}
//static properties and method cannot be accessed by class instance
console.log(Company.staticMethod())
console.log(Company.staticName)