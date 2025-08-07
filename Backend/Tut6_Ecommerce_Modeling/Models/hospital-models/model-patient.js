import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
    ,
    diagnoseWith:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,

    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:["A+","B+","A-","B-","O+","O-","AB+","AB-","N/A"],
        required:true
    },
    gender:{
type:String,
enum:["male","female","other"],
required:true
    },
    Hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital", // is this model reference or document reference(both's identifiers I made same )?
        required:true
    },
   appointedDocter: { //is camelCase is recommended in schmea defination?
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doctor"
   }
},{})