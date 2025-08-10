const func = (myFUnc) => ()=>{
   console.log("this is executed")
    return myFUnc;
}
function myFunction(){
    return "some value";
}
const retFunc = func(myFunction); //an anoynymous function get returned
console.log(retFunc!==myFunction) //
console.log(myFunction===retFunc)
const retFunc1 = retFunc() // executed that anoymous function, and stored its value, I've no idea how parameter(myFunction) is preserved which passed from func in retunFunc
console.log(retFunc1!==myFunction)

console.log(retFunc1===myFunction)
{/* <button onclick={func(myFunction)} //the anonymous function will act as handler and when event will occur the handler execute as well as myFunction too (callback param)
>click</button> */}


// promise1.then((value) => {
//   console.log(value);
//   // Expected output: "foo"
// });

// console.log(promise1);
// Expected output: [object Promise]