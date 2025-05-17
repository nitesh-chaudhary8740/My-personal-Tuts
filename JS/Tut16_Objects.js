const obj = Object.create({
    name:'nik',
    age:'26',
    Location:'Bhopal'

})
console.log(obj)
//object literals(literals are representation of specific values)
const symbol = Symbol('id');
const JsUser = {
    name:"nik",
    age:25,
    location:"Rewa",
    isLoggedIn:true,
    "stringkey":"value of string key",
    "another stringkey":"value of another string key",
    loginDays : ['monday','tuesday','wednesday'],
    [symbol]:'1234'
}

//accessing value through member accesss operator "."
console.log(JsUser.name)//with .operator we 
console.log(JsUser.stringkey)// key:"value" and "key":"value" are equivalent
//but object value cannot be access through using string literals as key
// console.log(JsUser."stringkey")//wrong syntax
//there is another way to access object values use [ ] notation
//here we have to pass value as literals or can be through variable
console.log(JsUser['name'])//using string literal
const key = 'name';
console.log(JsUser[key])//through variable
console.log(JsUser['another stringkey']);
const mySym = Symbol('id');
console.log(JsUser[symbol])
console.log(JsUser)
JsUser[symbol]='new value';
console.log(JsUser);
JsUser.isLoggedIn = false;
//changing the value of object key
console.log(JsUser)
//freezing the object
// Object.freeze(JsUser)//now JsUser object is freezed now value cannot be changed
// JsUser.name = 'new Name';
console.log(JsUser)
JsUser.greeting = function(name){
    console.log(`hello ${name || "there!"}`)//lexical this value not passed through param
    console.log(`hello ${this.name || "there!"}`)
    return "hey";//if no return statment it will return undefined?
}
console.log(JsUser.greeting)
console.log(JsUser.greeting(this.name))//this.name is indicating the global object where name is undefined
/* uniquness of symbol explained by me
const id1 = "id";
const id2 = "id"
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
const obj1 = {
    [id1]:"obj1 - 234",
    [symbol1]:"obj1 - symbolID"
}
const obj2 = {
    [id2]:"obj2 - 234",
    [symbol2]:"obj2 - symbolID"
}
console.log(obj1[id1])
console.log(obj1[id2])
console.log(obj2[id1])
console.log(obj2[id2])
console.log(obj1[symbol1])
console.log(obj1[symbol2])
console.log(obj2[symbol1])
console.log(obj2[symbol2])*/
