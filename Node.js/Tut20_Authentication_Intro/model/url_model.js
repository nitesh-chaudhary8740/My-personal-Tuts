import mongoose from "mongoose";
const schemaObj = {
    shortURL:{type:String,required:true,unique:true,index:true},
    originalURL:{type:String,required:true},
    visitHistory: [
    {
      time: { type: Date, default: Date.now }
    }
  ],
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'users'//reference to other collection 
    }

}
const urlSchema = new mongoose.Schema(schemaObj,{timestamps:true}); //schema
const URL = mongoose.model('project1_shorting_url',urlSchema);//model(modelname,schema)
export {URL};