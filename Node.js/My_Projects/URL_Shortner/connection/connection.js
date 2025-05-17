import mongoose from "mongoose";
export async function connectionDB (url){
   return mongoose.connect(url);
}