//array in JS and TS are non-primitive and predefined data type;
var hunters:string[] = ['gon','killua','kurapika']
var numbers:number[] = [2,3,5,4];
var mix:(number|string)[] = [2,3,5,'d'];//this not work
//tuples
var hunters1:ReadonlyArray<string> = ['killua','gon','hisoka']
// hunters1.push('feitan')
