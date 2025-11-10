import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewerares/multer.middlewere.js";
import { verifyJwt } from "../middlewerares/auth.middlewere.js";


const router = Router();

router.route('/register').post( 
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]), 
    registerUser
)

router.route("/login").post(loginUser)
//secure route
router.route("/logout").post(verifyJwt, logoutUser)


export default router;