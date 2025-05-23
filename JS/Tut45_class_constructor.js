class User{
    static defaultUsername = "Guest"; // Directly on the class
    constructor(username){
        this.username = username;
       
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    static showUserName(){
        console.log(this.defaultUsername)
    }
}
class vipUser extends User{
      constructor(username,email,password){
       super(username)//in place of .call(this)
        this.email = email;
        this.password = password;
    }
}
const user1 = new vipUser('nik','mail',2343);
console.log(user1.encryptPassword())
User.showUserName()//why undefined
//behind the scene
// function User(username,email,password){
//      this.username = username;
//         this.email = email;
//         this.password = password;
// }
// const user1 = new User('nik','mail',2343);
//  User.prototype.encryptPassword=function(){
//         return `${this.password}abc`
//     }
// console.log(user1.encryptPassword())