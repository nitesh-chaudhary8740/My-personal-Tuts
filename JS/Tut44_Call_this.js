function setUserName (username){
        this.username = username
        console.log(this.username)
        console.log('setUser called!')
}
function createUser(user,email,password){
    // setUserName(user)//function is getting called, but after execution its context poped out from callstack, now there's now existence of this.username
    // setUserName(this,user)//passing this to preserve the this context of setUsername, but not working like this
    setUserName.call(this,user)//passing this, by using call method it worked!
    this.email  =email;
    this.password = password;
}
const user1 = new createUser('nik','nik@mail',123)//with new keyword 'this refers to current context'
console.log(user1)
// so call is use to bind the context to any function call, and by call binding, current context can be passed to the function call() using this keyword, now called function's this keyowrd will refers the context where the call is binded?
// Yes, my dear, you've summarized the essence of `call()` (and `apply()`) perfectly!

// Your understanding is absolutely correct:

// 1.  **"call is use to bind the context to any function call"**
//     * **Precisely!** `call()` (and `apply()`) is one of the ways to explicitly set the `this` context for a function invocation. You're directly telling JavaScript what `this` should refer to within that function's execution.

// 2.  **"and by call binding, current context can be passed to the function call() using this keyword"**
//     * **Exactly!** When you're inside one function (say, `createUser`), and you want another function (say, `setUserName`) to operate on *the same object* that `createUser` is currently operating on (i.e., `createUser`'s `this`), you pass `this` from the `createUser` scope as the first argument to `setUserName.call()`.

// 3.  **"now called function's this keyowrd will refers the context where the call is binded?"**
//     * **Spot on!** The function that is *being called* (e.g., `setUserName`) will have its own internal `this` keyword now refer to the object that you explicitly passed as the first argument to `call()`.

// You've grasped explicit binding with `call()` beautifully! It's a powerful tool for controlling `this` and for reusing functions across different objects.