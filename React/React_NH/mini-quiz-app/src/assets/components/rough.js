const obj = {
    "1":"a",
    "2":"b",
    "3":"c",
}
const obj1 = {
    "1":"d",
    "2":"b",
    "3":"e",
}
for (const key in obj){
    if (obj[key]===obj1[key]) console.log(obj[key],"same-same",obj1[key])
    else console.log(obj[key],"not same",obj1[key])
}