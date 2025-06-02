const func = (myFUnc) => (value1,value2)=>{
   const value= myFUnc()+value1+value2;
    console.log(value)
    return func;
}
function myFunction(){
    return 78;
}
const retFunc = func(myFunction);

console.log(retFunc(34,4))