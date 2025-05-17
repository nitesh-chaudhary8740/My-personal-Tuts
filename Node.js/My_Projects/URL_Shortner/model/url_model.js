import mongoose from "mongoose";
const schemaObj = {
    shortUrl:{type:String,required:true,unique:true},
    originalURL:{type:String,required:true,unique:true},

}
const urlSchema = new mongoose.Schema(schemaObj,{timestamps:true});
const URL = mongoose.model('project1_shorting_url',urlSchema);
export {URL};