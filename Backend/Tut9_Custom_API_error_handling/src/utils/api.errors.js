class API_Error extends Error{
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ){
    super(message);
    this.statusCode = statusCode
    this.data = null
    this.message = message//is it readundent, because super class constructor is already called with passed custom message?
    this.success = false
    this.errors = errors
    if(stack){
        this.stack = stack
    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }
    }
}
export {API_Error}