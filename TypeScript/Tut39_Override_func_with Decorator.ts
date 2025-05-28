function upDatedSum(target:any,key:any,descriptor:PropertyDescriptor){
    descriptor.value = function sum(x:number,y:number){
        return  `${x} + ${y} = ${x+y}`
    }
}
class CustomMaths39{
    // @upDatedSum 
sum(x:number,y:number):string{
        return `${x+y}`
    }
}

const obj39 = new CustomMaths39()

console.log(obj39.sum(3,4))