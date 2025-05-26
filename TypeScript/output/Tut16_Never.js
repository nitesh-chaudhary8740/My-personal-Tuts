"use strict";
//
function loopFunction() {
    while (true) { //function will not gonna reach to the endpoint
        console.log('loop');
    }
} //a never function can be defined if function execution reach to the end-point
// loopFunction()
function simple() {
    console.log("it's execution will be gonna happen completely ");
}
function throwingErr() {
    throw new Error("output is an error");
}
throwingErr();
