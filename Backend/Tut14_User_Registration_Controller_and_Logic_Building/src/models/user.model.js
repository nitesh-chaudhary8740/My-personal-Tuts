import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema({
    username:{
    type:String,
    required:true,
    unique:true,
    lowecase:true,
    trim:true,
    index:true,
    },
   email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar: {
        type:String,//couldnary
        required:true
    },
    coverImage:{
        type:String,
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        type:String,
        required:[true,"password is true"]
    },
    refreshToken: {
        type:String,
    }
},{timestamps:true})
userSchema.pre("save", async function (next){  //prehook middleware
    //agar user profile updation se dauraan  password na chnage hua ho
    if(!this.isModified("password")) return next()//then terminate the middleware and pass next()
    this.password = bcrypt.hash(this.password,10)//which feild has to be decrypt, and rounds
    next;
}) 
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}        
userSchema.methods.generateAccessToken = async function (password) {
    return await jwt.sign({
        _id :this._id,
        email: this.email,
        username :this.username,
        fullName:this.fullName
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}        
userSchema.methods.generateRefreshToken = async function (password) {
     return await jwt.sign({
        _id :this._id,
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}        
 export const User = mongoose.model("User",userSchema);
 