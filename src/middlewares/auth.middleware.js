import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import prisma from "../prisma.js";
import bcrypt from "bcrypt";


export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization").replace("Bearer ", "")
    
        if(!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await prisma.user.findUnique({
            where: {
                id: decodedInfo.id
            },
            select: {
                id: true,
                email: true,
                name: true,
                address: true,
                bio: true,
                role: true,
                phone: true,
                rating: true,
                eventsJoined: true,
                profilePicture: true,
                sportsPreferences: true,
                eventsOrganized: true
            }
        })
    
        if(!user) {
            throw new ApiError(401, "Invalid access token")
        }
    
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, "Unauthorized request")
    }

})

export const encryptPassword = asyncHandler(async (req, _, next) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    next()
})