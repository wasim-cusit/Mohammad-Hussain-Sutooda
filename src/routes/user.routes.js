import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewere.js";


const router = Router();

router.route('/register').post( 
    upload.feilds([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "CoverImage",
            maxCount: 1
        }
    ]), 
    registerUser
)

export default router;