import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true,
    },
    description:{
        type:String,
        requried:true
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})
export const Product = mongoose.model("Product",productSchema)