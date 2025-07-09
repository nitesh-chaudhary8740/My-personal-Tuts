import { asyncHandler } from "../utils/asyncHandler.js";
import { API_Error } from "../utils/api.errors.js";
import { User } from "../models/user.model.js";
const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validation if all details are formatily correct and all info is provided
  //check user exists or not
  //check for avatar images
  //then upload in cloudinary, and check it is uploaded or not
  //create user object - and create entry in db
  //remove password and refresh token field from response
  //check for user creation
  //return response
  console.log("request received");
  const { fullName, email, userName, password } = req.body; //1st step
//validation steps
  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "")
  ){
    throw new API_Error(400,"All fields are required")
  }
//checking if existing or not
const existedUser = User.findOne({
    $or :[{userName},{email}] //shorthand of [{userName:userName},{email:email}]
})
if (existedUser) {
    throw new API_Error(400,"this username or email already exists")
}
});
export default registerUser;
