import { Router } from "express";
import registerUser from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();
router.route("/register").post(upload.fields( //upload is an middlerware of multer
    //field properties for multiple files and it takes an array of all files
    [
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"cover-img",
            maxCount:1
        }
    ]
),registerUser)
// http://localhost:8080/api/v1/register
export default router;