import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/users.model.js";
import { uploadMedia } from "../utils/mediaUpload.js"
import jwt from "jsonwebtoken"
import prisma from "../prisma.js"
import bcrypt from "bcrypt"



const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const isPasswordCorrect = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}


const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })
        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                refreshToken: refreshToken
            }
        })

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        password,
        phone,
        address,
        bio,
        sportsPreferences,
        eventsJoined,
        role,
        rating,
    } = req.body;


    if (!name || !email || !password || !phone) {
        throw new ApiError(400, "All fields are required");
    }

    console.log("Request Body: " ,req.body);



    const existingUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    // const profilePictureLocalPath = req.files?.profilePicture[0].path;
    // const profilePictureUrl = await uploadMedia(profilePictureLocalPath);

    // if (!profilePictureUrl) {
    //     throw new ApiError(400, "Profile picture upload failed");
    // }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
            phone,
            address,
            bio,
            sportsPreferences,
            eventsJoined,
            role,
            rating,
        }
    })

    const newlyCreatedUser = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            bio: true,
            sportsPreferences: true,
            eventsJoined: true,
            role: true,
            rating: true,
            profilePicture: true
        }
    })

    if (!newlyCreatedUser) {
        throw new ApiError(400, "User creation failed");
    }

    return res.status(200).json(new ApiResponse(200, "User created successfully", newlyCreatedUser));

})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // console.log("REQUEST: ",req);

    if (!email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!user) {
        throw new ApiError(404, "User doesn't exist")
    }

    const isPassValid = await isPasswordCorrect(password, user.password)

    if (!isPassValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user.id)

    const loggedInUser = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            bio: true,
            sportsPreferences: true,
            eventsJoined: true,
            role: true,
            rating: true,
            profilePicture: true
        }
    })

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                },
                "User Logged In Successfully."
            )
        )
})




const logoutUser = asyncHandler(async (req, res) => {

    const modifyedUser = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: null
            }
        },
        {
            new: true
        }
    )

    console.log("MODIFYED USER: ", modifyedUser);


    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(
                200,
                {},
                "User Logged Out Successfully."
            )
        )
})

const tokenRefresh = asyncHandler(async (req, res) => {
    const browserRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!browserRefreshToken) {
        throw new ApiError(401, "Unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            browserRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )

        const user = await User.findById(decodedToken._id)

        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }

        if (browserRefreshToken !== user.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or invalid")
        }

        const { newAccessToken, newRefreshToken } = await generateAccessAndRefreshTokens(user._id)

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(200)
            .cookie("accessToken", newAccessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {},
                    "Token Refreshed Successfully."
                )
            )
    } catch (error) {
        throw new ApiError(401, "Token refresh failed")
    }

})

export {
    registerUser,
    loginUser,
    logoutUser,
    tokenRefresh
}