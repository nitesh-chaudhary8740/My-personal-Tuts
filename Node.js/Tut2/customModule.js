const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a-b;
}
module.exports = "df";//
module.exports = add; //overwritted the its above line

//for multiple exports use objects
// module.exports(4,5);//module.exports is not a function
module.exports = {add,sub};//default exports

exports.x = "hey"