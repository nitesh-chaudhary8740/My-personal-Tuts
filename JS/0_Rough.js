
const name = 'nitesh';
const arr=['reference object'];
const timeout = setTimeout(() => {
  
   console.log(arr[0])
   //if sayHello function left the stack name more like will be undefined or cause ref error
}, 0);

