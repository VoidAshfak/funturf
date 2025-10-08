import { Router } from "express";
import { 
    getVenues,
    getVenueById 
} from "../controllers/venue.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/all").get(getVenues);
router.route('/:venue_id').get(getVenueById);


export default router;