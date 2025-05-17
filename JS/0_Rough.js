this.globalValue='hello global'//this = global context
//while assiging this refers to current object
function Employee(name,role,salary){
    this.name = name;//this = Employee context
    this.role=role;
    this.salary = salary;
}
console.log(this.globalValue)
const emp1 = new Employee('nik','MERN DEV',600000);

Employee.prototype.getDetails = function(){
    console.log('Name:',this.name)
    console.log('Role:',this.role)
    console.log('Salary:',this.salary)
}
emp1.getDetails();
// const emp2 = Employee();
// emp2.name = 'myname';
// emp2.role = 'Software Engineer';
// emp2.salary = 10000000;
// emp2.getDetails()
function number(passedValue){
    return `return converted value`
}
number.prototype.parseInt = function(value){
    //someCode
}