import express from 'express'
const urlRouter  = express.Router();
import { redirectHandler,postHandler,deleteHandler } from '../controller/url_controllers.js';
// urlRouter.route('/',getHandlerForAllUrl)
urlRouter.route('/nik.ly/:shortURL').get(redirectHandler)
urlRouter.route('/generate').post(postHandler)
urlRouter.route('/delete/:shortURL').delete(deleteHandler)

export {urlRouter};