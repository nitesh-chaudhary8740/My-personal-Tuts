//
function loopFunction():never{
    while(true){ //function will not gonna reach to the endpoint
        console.log('loop')
    }
}//a never function can be defined if function execution reach to the end-point
// loopFunction()
function simple()
// :never // it call cause error, coz function is executed succesfully to the end-point
{
    console.log("it's execution will be gonna happen completely ")
}
function throwingErr():never{
    
    throw new Error("output is an error");
    
}
throwingErr()