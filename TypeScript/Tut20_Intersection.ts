//intersection types allow you to Combine multiple types into one
var PersonDataA:{name:string} = {
    name:'nik'
}
var PersonDataB:{age:number} = {
    age:34
}
var PersonDataC:{name:string,age:number} = {
    name:'nitesh',
    age:34
}
//or using Interface
type personTA = {name:string}
type personTB = {age:number}
type personTC = personTA & personTB//intersection this new type have both types(A and B)
const personDataTA:personTA = {
    name:'nik'
}
const personDataTB:personTB = {
    age:34,
}
const personDataTC:personTC = {
    name:'hello',
    age:34,
}
//union: choose the one type for variable from given types
type unionType = string|number|boolean
let x:unionType;