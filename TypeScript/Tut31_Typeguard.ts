// A typeGuard in typescript is a technique used to narrow down the type of a variable,
// with in conditional block
//1. typeof (prefined)
//2. intanceof (class and prototypal functions)
//3. custom type (intetface,and cutsom types using type keyword)
let userData20: number | string | boolean = 20;
if (typeof userData20 === 'number') {
    console.log('this is number')
} else if (typeof userData20 === 'string') {
    console.log('this is string')
} else {
    console.log('thhis is boolean')
}
function checkDataType(data: string | number) {
    if (typeof data === 'string') {
        console.log('this is string')
    } else {
        console.log('this is number')
    }
}
checkDataType('df');
class Product31{

}
class Order31{

}
const p1 = new Product31();
const o1 = new Order31();
function checkDetails(data: Product31|Order31){
    if (data instanceof Product31){
        console.log('this is product')
    }
    else{
        console.log('this is order')
    }
}
checkDetails(o1);
interface userDataInterFace31 {
    name:string,
    city:string,
}
interface userInfoInterface31{
    id:number,
    email:string
}
const userData31 :userInfoInterface31|userDataInterFace31 = {
    name:'nik',
    city:'rewa'
}
const userInfo31:userInfoInterface31|userDataInterFace31 = {
    id:123,
    email:'nik@mail.com'
}
function checkUserData31(data:userDataInterFace31|userInfoInterface31){
    
        if((data as userDataInterFace31).name!=undefined){
            console.log('this is user data', (data as userDataInterFace31).name)
        }
        else{
            console.log('this is userinfo',(data as userInfoInterface31).email)
        }
    
}
checkUserData31(userInfo31)
checkUserData31(userData31)
