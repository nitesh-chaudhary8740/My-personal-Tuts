//for of
const arr = [1,2,3]
for (const element of arr) {
    console.log(element)
}
const greetings = 'this is greetings';
for (const element of greetings) {
    console.log(element)
}
//map()
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "INDIA")
console.log(map)
const newArr = [1,33,34]
const [hi, hello] = newArr //while destructuring array we can give any name to variable
console.log(hello)
for (const element of map) { //
    console.log(element)//getting array of each [key,value] pair
}
for (const [k ,v] of map) { // so we can destructure to use key and value differently by storing in seperate variables
    console.log(`${k}: ${v}`)
}
//===================iterating over object ==========================
const hunter = {
    Killua:'Transmutter',
    Gon:'Enhancer',
    Hisoka:'Transmutter',
    Kurapika:'Conjurer'
}
// for (const element of hunter) {//object directly not iteratable by for-of
//     console.log(element)
// }
// but through Object.keys(myobj)) and Object.values(myobj) can help to iterate 
//and also Object.entries(myobj) which returns key:value together
console.log(Object.keys(hunter))//single array which contains keys
console.log(Object.values(hunter))//single array which contains values
console.log(Object.entries(hunter))//single array which contains arrays of two values [key,value] 
for (const key of Object.keys(hunter)) {
    console.log(key)
}
for (const [key,value] of Object.entries(hunter)) {
    console.log(`${key}: ${value}`)
}
//but for-in loop is mostly preferred for accessing keys and value
//for in basically iterate over object and return keys
for (const key in hunter) {
   console.log(`${key}: ${hunter[key]}`)//hunter[key]//can used to access value
}
const programming = ['js','java','c++','ruby']
for (const index in programming) { //here it will return index
console.log(index)
}