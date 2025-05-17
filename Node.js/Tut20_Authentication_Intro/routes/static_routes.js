import express from 'express'
import { URL } from '../model/url_model.js';
const staticRouter = express.Router();
staticRouter.get('/signUp', async (req, res) => {
    res.render('signUp')
})
staticRouter.get('/signIn', async (req, res) => {
    res.render('signIn')
})
staticRouter.get('/', async (req, res) => {
    if (!req.user) return res.redirect('/signIn')
    const allUrls = await URL.find({ createdBy: req.user._id })
    res.locals = {
        urls: allUrls,
        name: req.user.name
    }
    res.render('home')
})
export { staticRouter }