
const  startExecution = async () =>{
    const myobj = await require('./test1');
    const myFunc = require('./test2');
    myFunc(myobj);
}
startExecution()