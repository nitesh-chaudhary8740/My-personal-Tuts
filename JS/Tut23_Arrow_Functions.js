const user = {
    userName:'nitesh',
    id:123,
    logIn:function(){
        // console.log(`${this.userName} logged in`)
        console.log(this)//current context of user object
        const innerFunc = () =>{
            console.log(`${this.userName} logged-in in arrow functionn`)
        }
        innerFunc()
    },
    userprofile:{
        role:'Dev',
        salary:700000,
        getDetails:()=>{
            console.log(`${this.userName}`)
        }
    },
    logInArrow:()=>{
        console.log(`${this.userName} logged in`)//it refers to global object
        console.log(this)//current context of user object
    }
}
user.logIn()
user.userName = 'nik';
user.logInArrow()
user.userprofile.getDetails()
// console.log(this)//global object context(in brower window object/ in Node JS empty object {})
// function myFunc(){
//     console.log(this)
// }
// myFunc()