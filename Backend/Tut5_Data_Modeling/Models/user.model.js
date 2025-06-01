import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    // username:String,
    // email:String,
    // isActive:Boolean,

    //or
    username:{
        type:String,
        required: true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,"password is require"]//[value:true/false,"custom message"]
    }


},
{timestamps:true}//this is secondry objects in schema which add two fields createdAt and updatedAt mannually
)
export const User = mongoose.model("Users",userSchema)