import { getUserBySessionId } from "../services/auth_service.js";
async function restrictToSignedUserOnly(req,res,next) {
    const userUID = req.cookies.uid;//fetching cookie named 'uid' from req object 
    if(!userUID) return res.redirect('/signIn') //if there is no uid in cookie
    const user = getUserBySessionId(userUID);//trying go fetch user from cookie's uid form map()
    if(!user) return res.redirect('/signIn');//and if there is no user on particular cookie's uid
    req.user = user;//else user prop added on req object with user document object
    next()//next middleware or router will be called
}
async function redirectToSignedUserOnly(req,res,next) {
    const userUID = req.cookies?.uid;
    const user = getUserBySessionId(userUID)
    req.user=user;
    next();

}
export {restrictToSignedUserOnly,redirectToSignedUserOnly}
