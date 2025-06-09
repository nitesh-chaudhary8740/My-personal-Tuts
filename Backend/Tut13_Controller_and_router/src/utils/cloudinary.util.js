import {v2 as cloudinary} from "cloudinary"
import fs from 'fs'
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
        // Upload an image
    const uploadCloudinary = async (localFilePath) =>{
        try {
           if(!localFilePath) return null;
     const response =  await cloudinary.uploader.upload(localFilePath,{
            //upload option for more visit documention of cloudniary
            resource_type:"auto"
           })
           console.log("file uploaded on cloudinary successfuly",response.url);
           return response;
        } catch (error) {
            console.log(`error on upload in cloudinary${error}`)
            fs.unlinkSync(localFilePath)//remove the locally saved temp file if upload get failed;
            return null;
        }    
    }
    // const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    // console.log(uploadResult);
export {uploadCloudinary}