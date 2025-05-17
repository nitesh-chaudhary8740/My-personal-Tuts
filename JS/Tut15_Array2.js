const hunters =['killua','gon','hisoka','feitan','chrolo','kurapika']
const ninjas =['naruto','sasuke','kakashi','itachi','rocklee','sakura']
// const allPushedCharacters = hunters.push(ninjas)//return 7
// console.log(hunters)//hunters array is modified now

// console.log(allPushedCharacters)//

//=========================using concate
// const concatenatedArray = hunters.concat(ninjas);
// console.log(concatenatedArray.concat("f","d"))

// ======================using spread operator ==================
const allCharacters = [...hunters,...ninjas];
console.log(allCharacters)
//================spreading multiple level array=================
const multiLevelArray = [1,2,3,[34,365],[54,[454,6565]]];
console.log(multiLevelArray.flat(Infinity))//be can pass level till we want to spread or make flat (i.e. 1,2,3...)
//I'm passing infinity

const name = 'nitesh1'
console.log(Array.isArray(name));
console.log(Array.from(name));
console.log(Array.from({key:"value"}));// returns[] empty array
let a = 3;
let b = 33;
let c = 73;
console.log(Array.of(a,b,c))