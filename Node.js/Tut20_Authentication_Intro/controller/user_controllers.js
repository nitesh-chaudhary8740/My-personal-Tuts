import { User } from "../model/users_model.js";
import {v4 as uuidV4} from "uuid" //uuid an npm ppackage which return random strings which can be used 
import { setUserSessionId } from "../services/auth_service.js";
async function handleUserSignUp(req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
        .then(user => res.status(200).redirect('/signUp'))
        .catch(error => res.status(500).json({ msg: "error in signUp" }))

}
async function handleUserSignIn(req, res) {
    const { email, password } = req.body;
    // JavaScript automatically interprets { email, password } as { email: email, password: password }.
    try {
        const user = await User.findOne({ email, password })//shorthand prop if prop name same as value holder variables 
        if (!user) { //if user null
            return res.redirect("/signIn")
        }
        const geneRatedSessionId = uuidV4(); //generated session id
        setUserSessionId(geneRatedSessionId,user);//set user to generated sessiln id and stored in map()
        res.cookie("uid",geneRatedSessionId);//then set cookie in res object
        
        return res.status(200).redirect('/');
    } catch (error) {
        return res.status(500).send("error in login")
    }

}

export { handleUserSignUp ,handleUserSignIn}