const obj = new Object()
 obj.id = "123"
 obj.name = "myObje"
const obj1 = { 
    id:'111',
    fullname:{
        fname:'fistName',
        lname:'lastName'
    }
}
const newObj = new Object(obj1); //obj1 === newObj passed reference to newObj
console.log(newObj.fullname.fname)
const newIntance = Object.create(obj1);//creates new instance
newIntance.id='333'
console.log(obj1)
console.log(newIntance)
console.log(newIntance.fullname)
function Employee(name,role,salary){
    this.name = name;
    this.role=role;
    this.salary = salary;

}
const emp1 = new Employee('nik','MERN DEV',600000)//creating new object using function constructor
//also known as Class's first citizen
Employee.prototype.getDetails = function(){
    console.log('Name:',this.name)
    console.log('Role:',this.role)
    console.log('Salary:',this.salary)
}
emp1.getDetails();
//cloing object //copying object values in another object
const myobj1 = {1:'a',2:'b'}
const myobj2 = {3:'a',4:'b'}
const myobj3 = {5:'a',6:'b'}
const myNewObj =  {myobj1,myobj2}//{ myobj1: { '1': 'a', '2': 'b' }, myobj2: { '3': 'a', '4': 'b' } }
console.log(myNewObj)//o/p: { myobj1: { '1': 'a', '2': 'b' }, myobj2: { '3': 'a', '4': 'b' } }

console.log(myobj1==myNewObj) //myNewObj itself have seperate reference 
console.log(myobj1==myNewObj.myobj1)//true//og reference is passed to myNewObj

const restObj = {...myobj1,...myobj2} //this is safe for copying value at first level
console.log(restObj);
restObj[3]='c'
console.log(restObj[3]);
console.log(myobj2[3])


//Object.assign is a static method which use to create shallow copy(copy the value at top level only) 
// of passed object to the method
//sytanx assign(target,souces....)
// //(obj1,obj2,obj3)//obj1 = is target //rest params are sources
//so all source params object's values will be copied and get stored to the obj1
//to avoid this use Object.assign({},obj1,obj2,obj3) //now all values will be copied to the seperate object literal

// const myAssignedObj = Object.assign(myobj1,myobj2,myobj3)//not good practive
// console.log(myAssignedObj);
// console.log(myobj1);
const myAssignedObj1 = Object.assign({},myobj1,myobj2,myobj3)
console.log(myAssignedObj1)
// Object.defineProperty(this, 'propertyName', { writable: false }) //!!!!!!!!!!!!!!!!!!!!Important: object instance value immutibilty!!!!!!!!!!!!!!!!!1111
console.log(Object.keys(myAssignedObj1))//returns an array of keys of passed object
console.log(Object.values(myAssignedObj1))//returns an array of values of passed object
console.log(Object.entries(myAssignedObj1))//returns an array of all [key,value]
//if we call the value of object property which not exist can cause crash the program 
// to avoid this we can use
console.log(myAssignedObj1.hasOwnProperty([1]))//true
