//closure basics
function one(){
    const fucnOneVar = "funOne variable";
    function two(){
         const fucnTwoVar = "funTwo variable";
        console.log(fucnOneVar)
        console.log(fucnTwoVar)
    }
    two()
    console.log(fucnOneVar)
    // console.log(fucnTwoVar)//not defined ,cannot access innerScope(closure scope)
}
one()
console.log(addOne(5))
function addOne(num){
    return num+1
}
//  addTwo(4)
//  console.log( add2(4))//function expressions are not hoisted
var add2 = function addTwo (num){//function expression
   return num+2
    
    
}
console.log(add2(4))
//  function recursive (num){
//     if(num===1){
//         console.log(1)
//     }
//     else{

//         console.log(num)
//         recursive(num-1)
//     }
// }