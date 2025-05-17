import { URL } from "../model/url_model.js"
import { generateShortURL } from "./generateURL.js";

// export async function getHandlerForAllUrl (req,res){
//  const allUrls = await URL.find({});
//     res.locals = {
//         urls: allUrls
//     }
//     res.render('home')
// }
export async function redirectHandler(req, res) {
    const URL_DOCUMENT = await URL.findOne({ shortURL: req.params.shortURL });
    if (URL_DOCUMENT) {
        await URL.updateOne({ shortURL: req.params.shortURL }, { $push: { visitHistory: { time: Date.now() } } })
        res.redirect(URL_DOCUMENT.originalURL);
    }
    else {

        res.status(400).json({ msg: 'url not exists', doc: URL_DOCUMENT, url: req.params.shortURL })
    }
}

export async function postHandler(req, res) {
    if (req.body.originalURL) {
        try {
            const checkExistingDoc = await URL.findOne({ originalURL: req.body.originalURL,createdBy:req.user._id})
            if (checkExistingDoc) {
                res.status(200).redirect('/')
            }
            else {
                const generatedURL = generateShortURL()
                if (!generatedURL) {
                    console.log('Generated URL:', generatedURL)
                   return res.status(500).json({ msg: 'Failed to generate short URL' })
                }
                console.log('Generated URL:', generatedURL)
                const NEW_URL_DOCUMENT = await URL.create({
                    shortURL: generatedURL,
                    originalURL: req.body.originalURL,
                    visitHistory:[],
                    createdBy:req.user._id
                })
               return res.redirect('/')
          
            //  res.status(200).render('home')
            }


        } catch (error) {
            console.log(req.body)
            console.log(error)
            res.status(400).json({ msg: 'error to generateURL' })
        }

    }
    else {
        res.status(400).json({ msg: 'enter your url' })
    }
}
export async function deleteHandler(req, res) {
  console.log("request reached!")
  URL.deleteOne({ shortURL: req.params.shortURL })
    .then(url_doc => {
      console.log("deletedURL: ", url_doc);
      res.status(200).json({ message: 'URL deleted successfully' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error deleting URL' });
    });
}