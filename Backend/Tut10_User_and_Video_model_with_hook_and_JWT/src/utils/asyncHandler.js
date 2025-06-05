// const asyncHandler = (func) => async() =>{} //is it equivalent to this:
// const asyncHandler = (func) => {
//    return async()=>{

//     }
// }
const asyncHandler = (func) => async(req,res,next) => {
    try {
        await func(req,res,next);
    } catch(error){
        res.status(error.code || 500).json({
            sucess:false,
            msg:error.msg
        })
    }
}
const asyncPromiseHandler = (func)  => {
        (req,res,next) => {
            Promise.resolve(func(req,res,next)).catch(err=>next(err))
        }
}
export {asyncHandler,asyncPromiseHandler}