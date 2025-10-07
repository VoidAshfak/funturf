import { Router } from "express";
import { 
    registerUser, 
    loginUser, 
    logoutUser, 
    tokenRefresh, 
    varifyLogin ,
    getUserById
} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import { 
    verifyJWT, 
    encryptPassword 
} from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/register").post(
    // upload.fields([
    //     {
    //         name: "profilePicture", 
    //         maxCount: 1
    //     }
    // ]),
    encryptPassword,
    registerUser
);
router.route("/login").post(loginUser);
router.route("/refresh").post(tokenRefresh);
router.route("/:user_id").get(getUserById);


// protected routes
// router.route("/logout").post(verifyJWT, logoutUser)
// router.route("/varify-login").post(varifyLogin)

export default router;