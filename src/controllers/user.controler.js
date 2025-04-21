import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";
import {User} from "../models/users.model.js";
import {uploadMedia} from "../utils/mediaUpload.js"





const generateAccessAndRefreshTokens = async (userId, ) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}


    // get user details from frontend
    // validate user details
    // check if user already exists
    // check for image and upload them to cloudinary
    // create user object
    // create entry in database
    // send response without password and refresh token
    // check for user creation
    // return response
const registerUser = asyncHandler(async (req, res) => {
    const {
        name,  //required
        email, //required + unique
        password, //required 
        phoneNumber, //required + unique
        location, 
        bio, 
        sportsPreferences, //required
        skillLevel,
        teamsJoined,
        eventsJoined,
        role, //required
        rating,
    } = req.body;


    if(!name || !email || !password || !phoneNumber || !role || !sportsPreferences) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({
        $or: [{email: email}, {phoneNumber: phoneNumber}]
    })

    if(existingUser) {
        throw new ApiError(409, "User already exists");
    }

    const profilePictureLocalPath = req.files?.profilePicture[0].path;
    const profilePictureUrl = await uploadMedia(profilePictureLocalPath);

    if(!profilePictureUrl) {
        throw new ApiError(400, "Profile picture upload failed");
    }

    const user = await User.create({
        name,
        email,
        password,
        profilePicture: profilePictureUrl.url,
        phoneNumber,
        location: location || null,
        bio: bio || "",
        sportsPreferences,
        skillLevel: skillLevel || "BEGINNER",
        teamsJoined: teamsJoined || [],
        eventsJoined: eventsJoined || [],
        role,
        rating: rating || 0,
    })

    const newlyCreatedUser = await User.findById(user._id).select("-password -refreshToken");

    if(!newlyCreatedUser) {
        throw new ApiError(400, "User creation failed");
    }

    return res.status(200).json(new ApiResponse(200, "User created successfully", newlyCreatedUser));

})


const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if(!email && !password) {
        throw new ApiError(400, "All fields are required");
    }

    const user = await User.findOne({
        email
    })

    if(!user) {
        throw new ApiError(404, "User doesn't exist")
    }
    
    const isPassValid = await user.isPasswordCorrect(password)

    if(!isPassValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

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
    
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )
    
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

export {
    registerUser,
    loginUser,
    logoutUser
}