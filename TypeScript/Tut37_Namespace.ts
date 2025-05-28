namespace AdminNameSpace{
    export class UserAuth37{
    login(){
        console.log('user login function');
    }
}
    export function getList(){
    console.log('list of users')
}
}
const user37 =new  AdminNameSpace.UserAuth37();
user37.login()