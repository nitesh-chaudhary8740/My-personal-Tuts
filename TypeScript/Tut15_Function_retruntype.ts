function sayHello():string{
    return 'Hello World!'
}
//by default in ts return type is void
function returnSomething(num:any):number|string|boolean{
    if(num===0){
        return 0;
    }
    else{
        return '0'
    }
}
function returnAnything():any{
    return;
}