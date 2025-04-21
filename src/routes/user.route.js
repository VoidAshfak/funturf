import { Router } from "express";
import { registerUser, loginUser, logoutUser, tokenRefresh } from "../controllers/user.controler.js";
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "profilePicture", 
            maxCount: 1
        }
    ]),
    registerUser
);

router.route("/login").post(loginUser)


// protected routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(tokenRefresh)

export default router;