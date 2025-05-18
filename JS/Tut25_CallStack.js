// ==========================Javascript Execution context====================================

/*
there are three execution context in JS
1. global context
2. function context
3. eval context
*/
/**
 * Phases of each execution context
 * 1. memory creation phase
 * 2. execution phase
 */
//  when JS file pass to the execution engine,
//  its creates a global execution context which get stored in 'this' keyword


console.log(value);
var value = 34;
console.log(value);

const globalValue = func(value)
this.gec = 'gec'

console.log(globalValue)
function func(value){//function definition is already created and stored in heap at mememory creation phase, so at the execution phase it call be called anywhere in that's Eexection context's lexical enviornment
    // const globalValue = 'inside function'//each context has outer env reference(pointer to parent Execution context)//if any variable not found its own lexical scope it will look for particular variable in parent's scope
    this.fec = 'fec';
    const globalValue = globalValue;
    console.log(globalValue)
    console.log(this.gec)
    console.log(this.fec)
    console.log(`inside the func ${value}`)
    // console.log(this.global)
    return globalValue;// return statment can bring value for child EC to parent EC
}

