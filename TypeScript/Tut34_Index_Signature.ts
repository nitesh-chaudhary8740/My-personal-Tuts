
//index signature provide flexibility while haveing type
// type userDataType34 = {
//     username:string,
//     mobile:number,
//     id:number,
//     marks:number,
// }



// type userDataType34 = {
//     [key:string] : number |string;
// }
type userDataType34 = {//now two fields username and mobile are must, and for further keys object is flexible
    readonly id:number
    username:string,
    mobile:number,
    [key:string] : number |string;
}
let userData34:userDataType34 ={
    id:10,
    username:'nik',
    mobile:9999,
    marks:90,
}