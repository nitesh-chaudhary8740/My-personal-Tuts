//javascript by default have prototypal behaviour
function myFunc(name){
    console.log('name is ',name)
    this.age=myFunc.age;
    return `${name} + ${this.age}`//this always refers to parent protoype (I think)
}
console.log(myFunc.age)

myFunc.age= 25;
console.log(myFunc.age)
console.log(myFunc('nitesh'))//this.age ===undfined (this is binded to parent prototype, in this case parent protoype is global object(node env))
console.log(myFunc.prototype)//now myFunc have empty list of prototypes
myFunc.prototype.myProto = function(){
    console.log('age is',this.age)
    return this.age
}
console.log(myFunc.prototype)//now there's one function has got stored
//now I need an instance to access this prototypal property which holds an anonymous function
const instance = new myFunc('my name')
console.log(instance.myProto()) //still unable to get the value, this.age
Object.prototype.universalProtoype = function(){
    console.log('this is universal prototype');
}
const myArr = [1,3,45]
const myObj ={
    key:'value'
}
// level of prototype hierarachy: function,Array,String>>Object
//that means fucntion Array and String objects can access Object prototypes, 
//but object cannot access the prototype of Array, function, and String
console.log(myArr.universalProtoype());
console.log(myObj.universalProtoype());
Array.prototype.ArrayPrototype = function(){
    console.log("this is arrayprotoype")
}
console.log(myArr.ArrayPrototype())//accessible for Array objects
// console.log(myObj.ArrayPrototype())//not accessiable (typeError)

console.log(Array.__proto__)
String.prototype.trueLength = function(string){
    console.log(this);
    console.log(`True length is ${this.trim().length}`)
}
const str = ' sample string     ';
str.trueLength()
//notorious this keyword ugghh
