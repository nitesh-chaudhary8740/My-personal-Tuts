// Temporal.now() this proposal is at stage-3, 
let dateObj = new Date();
console.log(dateObj);//date,time and zone
console.log(dateObj.toString());//readable date time and zone
console.log(dateObj.toDateString());//day with date
console.log(dateObj.toLocaleString());// date in local format and time
console.log(dateObj.toLocaleDateString());// o
console.log(typeof(dateObj))


//for specfic data
let createdDate = new Date(2025,0,28);//(yyyy,m,d,h,m,s,....)
console.log(createdDate.toString())
console.log(createdDate.toDateString())
console.log(createdDate.toLocaleDateString())
// let newCreatedDate = new Date("2025-22-3");//invalid date, should follow yyyy-m-d format
// let newCreatedDate = new Date("2025-2-3");//we can use any seperator
let newCreatedDate = new Date("2025/2/3");
// let newCreatedDate = new Date("2025$2$3");
console.log(newCreatedDate.toString())
console.log(newCreatedDate.toDateString())
console.log(newCreatedDate.toLocaleDateString())
console.log(newCreatedDate.getTime())
//timestamps
const timeStamp = Date.now();// A large number representing milliseconds since Jan 1, 1970 UTC
console.log(timeStamp)
const formattedDate = new Date(timeStamp)
console.log(formattedDate.getFullYear())
console.log(formattedDate.getMonth()+1)//month starts from 0//so month+1
console.log(formattedDate.getDate())
console.log(formattedDate.getDay())
console.log(formattedDate.getHours())
const formattedLocaleDate = formattedDate.toLocaleString('default',{year:'numeric',month:"long",day:"numeric",weekday:"long"})
// console.log(Date.now().toLocaleString())
console.log(formattedLocaleDate)