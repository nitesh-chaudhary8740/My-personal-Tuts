import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async(req,res)=>{
    console.log("request received")
    res.status(200).json({
        msg:'okay'
    })
})
export default registerUser;