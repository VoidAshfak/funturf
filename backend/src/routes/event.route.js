import { Router } from "express";
import {
    createEvent,
    getEvents,
    deleteEvent
} from '../controllers/event.controler.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/create-event').post(verifyJWT, createEvent)
router.route('/get-events').get(verifyJWT, getEvents)
router.route('/get-event').get()
router.route('/delete-event').delete(verifyJWT, deleteEvent)


router.route('/update-event').put()

export default router