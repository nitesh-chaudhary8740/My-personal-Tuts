const myArr = new Array("h",4,54,{key:"value"},true,9.8)
myArr.push("pushed element")
console.log(myArr)
myArr.pop()
console.log(myArr);
myArr.unshift(9)//unshift will shift each element's index by one; can cause performance issue
console.log(myArr)
console.log(myArr.includes(54))
console.log(myArr.indexOf(4))
console.log('orignal array',myArr)
console.log('on slice',myArr.slice(1,4))
console.log('orignal array after slice',myArr)
console.log('orignal array',myArr.splice(1,4))
console.log('orignal array after splice',myArr)