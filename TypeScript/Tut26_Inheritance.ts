export class Auth{
       logIn(name:string,password:string){
        if(name && password){
            return `student login`
        }
        else{
            return `not logged in`
        }
    }
}
class Student extends Auth{
    // logIn(name:string,password:string){
    //     if(name && password){
    //         return `student login`
    //     }
    //     else{
    //         return `not logged in`
    //     }
    // }
    result(marks:number){
        if(marks>33){
            return `pass`
        }
        else{
            return `fail`
        }
    }
}
class Teacher extends Auth{
    // logIn(name:string,password:string){
    //     if(name && password){
    //         return `student login`
    //     }
    //     else{
    //         return `not logged in`
    //     }
    // }
    subject(subject:string){
        return `he/she teaches ${subject}`
    }
}