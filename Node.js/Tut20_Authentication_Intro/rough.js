// const obj = {
//     key:'value'
// }
// function a(){
//     return obj;
// }
// function b(){
//     return obj;
// }
// b().newKey = 'this is newKey';
// console.log(a().newKey)//returning same object

function a(){
    return {key:'value'};
}
function b(){
    return {anotherkey:'another value'};
}
a().newkey = 'this is newKey';//new object is returned and value is assigned but returned object not get stored anywhere, so stored new prop cannot be used further it is deleted by garbage collector

console.log(a().newKey)//undifined
const aObj = a(); //here I stored a returned object now I can assign new properties which will add on
aObj.newKey = 'this is newKEy in aObj'
console.log(aObj.newKey)

console.log(a().newKey)//undifined