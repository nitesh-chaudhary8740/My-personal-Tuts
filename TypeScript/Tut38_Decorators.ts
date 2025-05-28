function classLogger(constructor:Function){
    console.log(constructor.name)
}
function getKeyDetails(t:any,k:any){
    console.log(k, t)
}
@classLogger
// @getKeyDetails
class CustomMaths{
    value1:number;
    @getKeyDetails
    value2:number;
    // @getKeyDetails//can't use decorator above constructors
    constructor(x:number,y:number){
        this.value1 = x;
        this.value2 =y;
    }
}
const obj38 = new CustomMaths(3,4)