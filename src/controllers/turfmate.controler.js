import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken"
import prisma from "../prisma.js"

const sendTurfmateRequest = asyncHandler(async (req, res) => {
    const { receiverId } = req.body

    // Check if sender and receiver are the same
    if (req.user.id === receiverId) {
        throw new ApiError(400, "You cannot send a friend request to yourself")
    }

    try {
        // Already checked sender exists through auth middleware
        // Check if receiver exists. If not, then the receiver might have been deleted.
        const receiverExists = await prisma.user.findUnique({
            where: {
                id: receiverId
            }
        })

        if (!receiverExists) {
            throw new ApiError(400, "Receiver does not exist")
        }

        // Check if turfmate request already exists
        const turfmateRequest = await prisma.turfmate.findFirst({
            where: {
                sender: req.user.id,
                receiver: receiverId
            }
        })

        console.log(turfmateRequest);

        // Check if the receiver has already sent a turfmate request
        const turfmateReverseRequest = await prisma.turfmate.findFirst({
            where: {
                sender: receiverId,
                receiver: req.user.id
            }
        })

        console.log(turfmateReverseRequest);

        // If turfmate request already exists, check status
        if ((turfmateReverseRequest && turfmateReverseRequest.status === "FRIEND") || (turfmateRequest && turfmateRequest.status === "FRIEND")) {
            return res.status(201).json(new ApiResponse(201, "You are already friends", turfmateRequest || turfmateReverseRequest))
        }

        // If receiver has already sent a turfmate request, check status
        if (turfmateReverseRequest && turfmateReverseRequest.status === "PENDING") {
            const acceptRequest = await prisma.turfmate.update({
                where: {
                    id: turfmateReverseRequest.id
                },
                data: {
                    status: "FRIEND"
                }
            })
            return res.status(200).json(new ApiResponse(200, "Friend request accepted", acceptRequest))
        }

        // If turfmate request exists, check status. Else create new turfmate request
        if (turfmateRequest && turfmateRequest.status === "PENDING") {
            throw new ApiError(400, "You have already sent a friend request")
        } else {
            const turfmateRequest = await prisma.turfmate.create({
                data: {
                    sender: req.user.id,
                    receiver: receiverId,
                    status: "PENDING"
                }
            })
            return res.status(200).json(new ApiResponse(200, "Friend request sent", turfmateRequest))
        }
    } catch (error) {
        console.log("Something went wrong while sending turfmate request", error);
    }

})

const getPendingRequests = asyncHandler(async(req, res) => {
    
    try {
        const pendingRequests = await prisma.turfmate.findMany({
            where: {
                receiver: req.user.id,
                status: "PENDING"
            }
        })    
    
        return res.status(200).json(new ApiResponse(200, "Pending turfmate requests", pendingRequests))
    } catch (error) {
        throw new ApiError(400, 'Something went wrong while getting pending turfmate requests', error);
    }
})

const acceptTurfmateRequest = asyncHandler(async(req, res) => {
    const {requestId} = req.body;
    const receiver = req.user.id;
    try {
        const acceptRequest = await prisma.turfmate.update({
            where: {
                id: requestId,
                receiver: receiver
            },
            data: {
                status: "FRIEND"
            }
        })
        return res.status(200).json({
            success: true,
            message: "Friend request accepted",
            data: acceptRequest
        })
    } catch (error) {
        throw new ApiError(400, 'Something went wrong while accepting turfmate request', error);
    }
})

const getTurfmates = asyncHandler(async(req, res) => {
    try {
        const turfmates = await prisma.turfmate.findMany({
            where: {
                OR: [
                    {
                        sender: req.user.id,
                        status: "FRIEND"
                    },
                    {
                        receiver: req.user.id,
                        status: "FRIEND"
                    }
                ]
            }
        })
        return res.status(200).json(new ApiResponse(200, "Turfmates", turfmates))
    } catch (error) {
        throw new ApiError(400, 'Something went wrong while getting turfmates', error);
    }
})

const getMutualTurfmates = asyncHandler(async(req, res) => {

    const {userTwo} = req.body
    try {
        const userOneFriend = await prisma.turfmate.findMany({
            where: {
                status: "FRIEND",
                OR: [
                    {
                        sender: req.user.id
                    },
                    {
                        receiver: req.user.id
                    }
                ]
            }
        })
    
        const userTwoFriend = await prisma.turfmate.findMany({
            where: {
                status: "FRIEND",
                OR: [
                    {
                        sender: userTwo
                    },
                    {
                        receiver: userTwo
                    }
                ]
            }
        })
    
        const turfmatesOfUserOne = userOneFriend.map((friend) => (
            friend.sender === req.user.id ? friend.receiver : friend.sender
        ))
    
        const turfmatesOfUserTwo = userTwoFriend.map((friend) => (
            friend.sender === userTwo ? friend.receiver : friend.sender
        ))
    
        const mutualFriendIds = turfmatesOfUserOne.filter(id =>
            turfmatesOfUserTwo.includes(id)
        );
    
        return res.status(200).json(new ApiResponse(200, "Mutual turfmates", mutualFriendIds))
    } catch (error) {
        throw new ApiError(400, 'Something went wrong while getting mutual turfmates', error);   
    }

})

// const rejectTurfmateRequest = asyncHandler((req, res) => { })
// const ditachWithTurfmate = asyncHandler((req, res) => { })


export {
    sendTurfmateRequest,
    getPendingRequests,
    acceptTurfmateRequest,
    getTurfmates,
    getMutualTurfmates
}