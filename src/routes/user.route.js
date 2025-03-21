import { Router } from "express";
import { registerUser } from "../controllers/user.controler.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {name: "profilePicture", maxCount: 1}
    ]),
    registerUser
);

export default router;