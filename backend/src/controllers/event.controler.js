import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {mongoClient} from "../prisma.js";


const createEvent = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        sport,
        date,
        playersRequired,
        playersJoined,
        status,
        venueId,
        rules
    } = req.body

    if (!title || !sport || !date || !venueId || !playersRequired) {
        throw new ApiError(400, "A required field is missing");
    }

    const createdEvent = await mongoClient.event.create({
        data: {
            title,
            description,
            organizerId: req.user.id,
            sport,
            date,
            playersRequired,
            playersJoined,
            status,
            venueId,
            rules
        }
    })

    if (!createdEvent) {
        throw new ApiError(200, "Event creation failed!")
    }

    return res.status(200).json(new ApiResponse(200, "Event created successfully", createdEvent));

})

const getEvents = asyncHandler(async (req, res) => {

    const userId = req.user.id;

    if (!userId) {
        return new ApiError(404, "User is not varified");
    }

    try {
        const events = await mongoClient.event.findMany({
            where: {
                OR: [
                    { organizerId: userId },
                    { playersJoined: { has: userId } }
                ]
            }
        })
    
        if(!events) {
            return new ApiError(500, "Error occured when getting the events")
        }
        return res.status(200).json(new ApiResponse(200, "Events fetched successfully", events));
    } catch (error) {
        return new ApiError(500, "Error occured when getting the events", error);
    }
})


const deleteEvent = asyncHandler(async (req, res) => {
    const eventId = req.body.eventId;
    const userId =  req.user.id;

    const eventExists = await mongoClient.event.findFirst({
        where: {
            id: eventId,
            organizerId: userId
        }
    })
    if(eventExists) {
        throw new ApiError(400, "The event doesn't exiss.")
    }
    const deletedEventResponse = await mongoClient.event.delete({
        where: {
            id: eventId,
            organizerId: userId
        }
    })

    if(!deletedEventResponse) {
        throw new ApiError(400, "There was an error deleting  the event");
    }
    return res.status(200).json(new ApiResponse(200,"Event deleted successfully"));
});



export {
    createEvent,
    getEvents,
    deleteEvent
}