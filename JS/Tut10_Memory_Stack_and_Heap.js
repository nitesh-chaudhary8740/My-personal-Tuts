/**
 * stack memory get used by primitvie variables
 * Heap memory worked with non-primitive (reference type)
 */
let primitiveVar = "this is primitive variable" //value directly stored in stack
let newPrimitive = primitiveVar; 
/*
value of primitiveVar is its actual value which is "this is primitive variable"
will be passed to newPrimitive from stack
*/
let obj1 = { 
    //obj1 variable, the address(add. of heap space where all value are stored) of object will be get stored
    key:'this is key-value of object 1'
}
let obj2 = {
    key:'this is key-value of object 2'
}
obj1=obj2; //now variable obj1 is storing the address value of obj2(obj1 = add of obj2)
//therefor now obj1 and obj2 are holding same address value on stack, where that address
//is pointing the same heap space
obj1.key='modified key';
console.log(obj1.key)
console.log(obj2.key)