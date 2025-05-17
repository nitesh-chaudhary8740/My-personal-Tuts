import mongoose from "mongoose";
const schemaObj = {
    shortURL:{type:String,required:true,unique:true,index:true},
    originalURL:{type:String,required:true},
    visitHistory: [
    {
      time: { type: Date, default: Date.now }
    }
  ]

}
const urlSchema = new mongoose.Schema(schemaObj,{timestamps:true});
const URL = mongoose.model('project1_shorting_url',urlSchema);
export {URL};