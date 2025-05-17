import express from 'express'
const router  = express.Router();
import { redirectHandler,homePage,postHandler } from '../controller/url_controllers.js';
router.route('/nik.ly/:shortURL').get(redirectHandler)
router.route('/').get(homePage);
router.route('/generate').post(postHandler)
export {router};