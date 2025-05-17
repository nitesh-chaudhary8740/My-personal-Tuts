import express from 'express'
import { handleUserSignUp,handleUserSignIn } from '../controller/user_controllers.js';
const userRouter = express.Router(); 
userRouter.post('/signUp',handleUserSignUp)
userRouter.post('/signIn',handleUserSignIn)
export {userRouter};