import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    subTodoes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodos"
        }
    ]
},{timestamps:true})
export const Todo = mongoose.model("Todos",todoSchema);



