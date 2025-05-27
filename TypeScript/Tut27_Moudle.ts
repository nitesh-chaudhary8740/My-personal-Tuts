import { Auth } from "./Tut26_Inheritance";
import { userInfoInterface } from "./Tut27_ModuleType_Export";

var userInfo:userInfoInterface = {
    name:'nik',
    age:34,
    email:'mymail@mail.com',
    password:'234abc'
}
class User extends Auth{

}
const user1 = new User()

console.log(user1.logIn(userInfo.name,userInfo.password))