
function fucn1(){
    this.a = 'this is a'
    //  return new fucn1; //direct returns causing error maximum stack reached
}
function getInstance(){
    return new fucn1;
}
const instanceOfFunc1 = getInstance() 
console.log(instanceOfFunc1.a)
// ===========================================OOPs=================
//construnctor function
//prototypes
//classes
//Instances
