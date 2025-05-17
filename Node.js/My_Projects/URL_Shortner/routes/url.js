import express from 'express'
const router  = express.Router();
import { redirectHandler,showHandler,postHandler } from '../controller/url_controllers.js';
router.route('/nik.ly/:shortURL').get(redirectHandler)
router.route('/showAll').get(showHandler)
router.route('/generate').post(postHandler)
export {router};