//forEach doesn't value return any value
//thats why there are other array method created
// filter
const numbers = [1,2,3,4,5,6,7,8,9]
const filteredNumbers = numbers.filter((number,index)=>{

    return number>5//condition satisfied values will be returned
})
console.log(filteredNumbers)
//===map===
const afterAdding_10 = numbers.map(number=>number+10)
console.log(afterAdding_10)
// array.reduce(callbackFunction(accumulator, currentValue, currentIndex, array), initialValue);
const addingALLelements_sum_into_100 = numbers.reduce((accumulator,number)=>accumulator+number,100)
console.log(addingALLelements_sum_into_100)