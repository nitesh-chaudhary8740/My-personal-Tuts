import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true,
    }
},{timestamps:true})
export const Category = mongoose.model("Category",categorySchema)