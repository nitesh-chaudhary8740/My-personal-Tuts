  //before promise bluebird is get used
    //promise promise is an object which represent the completion or failure of object
    // console.log('1st execution')
    // const promise = new Promise((resolve,reject)=>{
    // console.log('2nd inside promise callback')
    //     setTimeout(() => {
    //         console.log('async is completed......')
    //         resolve('resolved value')
    //     }, 2000);
    // })
    // promise.then((value)=>{//resolution value is passed in handler param
    //     console.log('then part')
    //     console.log(`Fulfilled with resolution: ${value}`)
    // })
    // new Promise((resolve, reject) => {
    //     console.log('3rd inside second promise callback')
    //     setTimeout(() => {
    //         resolve('promise 2 resolve value')
    //     }, 3000);
    // }).then((value)=>{
    // console.log('second promise after fullfilled',value)
    // })
    // const promiseThree = new Promise(function(resolve,reject){
    //     let error = true;
    //     if(!error){
    //         setTimeout(() => {
    //            resolve('promise three resolved') 
    //         }, 1000);
    //     }
    //     else{
    //         setTimeout(()=>{
    //             reject('something went wrong')
    //     },1000)
    //     }
    // }).then((value)=>{
    //     console.log('1st resolved then value before erroe',value)
    //     throw new Error("this is an error");//throwing an error stop the execution of context or block
    //     console.log('1st resolved then value after error',value)

    // },(value)=>{ //rejection handled in then block( catch() is preffered though)
    //     console.log('1st then  reject handler before error',value)
    //      throw new Error("this is an error");
    //     console.log('1st then  reject handler after error',value)
    // }).catch(err=>{
    //     console.log(err);
    //     console.log('1st catch',err)
    // }).then(value=>{
    //     console.log('2nd then',value)
    // }).finally(()=>{
    //     console.log("it will execute doesn't matter promise resolved or rejected")
    // })
    //===================handling promise through async========================
    // const promiseFour = new Promise(function (resolve, reject) {
    //     let error = true;
    //     if (!error) {
    //         setTimeout(() => {
    //             // resolve('resolved string')
    //             resolve({ username:'nik' })
    //         }, 1000);
    //     }
    //     else {
    //         setTimeout(() => {
    //             reject('something went wrong')
    //         }, 1000)
    //     }
    // })
    // async function comsumePromise() {
    //     try {
    //         const response = await promiseFour;
    //         console.log(response.username)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // comsumePromise()
async function fetchingGithubAPI (){
    try{

        const returnedPromiseAsResponse = await fetch("https://api.github.com/users/nitesh-chaudhary8740");
        const responseData = await returnedPromiseAsResponse.json()//is it equivalent to, returnedPromiseAsResponse.json().then((data)=>{console.log(data)})
        console.log(responseData.login)
        // returnedPromiseAsResponse.json().then((data)=>{console.log(data)})
        //json() for object , text() for html and plaintext
    }catch(err){
        console.log(err)
    }
   
}
fetchingGithubAPI()