import { URL } from "../model/url_model.js"
import { generateShortURL } from "./generateURL.js";
export async function redirectHandler(req,res){
    const URL_DOCUMENT =  await URL.findOne({shortUrl:req.params.shortURL});
    if(URL_DOCUMENT){
        res.redirect(URL_DOCUMENT.originalURL);
    }
    else{

        res.status(400).json({msg:'url not exists',doc:URL_DOCUMENT,url:req.params.shortURL})
    }
}
export async function showHandler(req,res){
   const showAPI = await URL.find({});
    res.status(200).json(showAPI);
}
export async function postHandler(req,res){
    if(req.body.originalURL){
        const checkExistingObj= await URL.findOne({originalURL:req.body.originalURL})
        if(checkExistingObj){
            res.status(409).json({msg:'this url is already shorted!'})
        }
        else{
      
        try {
          const generatedURL =   await generateShortURL()
         const shortURL =   await URL.create({
                shortUrl:generatedURL,
                originalURL:req.body.originalURL
              });
           res.status(201).json({msg:`your shortURL is: ${shortURL}`})   
        } catch (error) {
            res.status(400).json({msg:'error to generateURL'})
        }
    }
    }
    else{
        res.status(400).json({msg:'enter your url'})
    }
    

}