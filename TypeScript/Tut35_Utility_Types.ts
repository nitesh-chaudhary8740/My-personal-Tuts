//In tyypescript . Utility types are built-in types that help
//transform or manipulate other types in convenient way.

//1.Partial, 
//2. Required,
//3. Readonly,
//4. Pick
interface UserInterFace35{
    id:number,
    name:string,
    location:string,
    contact:string,
}
let UserData35:Partial<UserInterFace35> = { // partial makes  interface properties optional, but can't add addtional prop
    id:234,
    // newProperty:'value'//not allowed
}
function getData35(data:Partial<UserInterFace35>):void{
    console.log(data?.id)
    console.log(data?.name)
}
getData35({id:234,name:'454'})
function getData35_1(data:Required<UserInterFace35>):void{
    console.log(data?.id)
    console.log(data?.name)
}
getData35_1({id:234,name:'454',location:'rewa',contact:'34543'})//all field is need to be pass
const myData35:Pick<UserInterFace35,'name'|'location'> = {
    name:'nik',
    location:'rewa'
}