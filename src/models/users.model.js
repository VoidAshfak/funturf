import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
        },

        profilePicture: {
            type: String,
            required: false,
        },

        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },

        location: {
            city: String,
            state: String,
            country: String,
            coordinates: {
                type: {
                    type: String,
                    enum: ["Point"],
                    default: "Point"
                },
                coordinates: {
                    type: [Number], // Longitude, Latitude
                    index: "2dsphere"
                }
            }
        },

        bio: {
            type: String,
            maxlength: 300,
        },

        sportsPreferences: {
            type: [String],
            default: [],
            required: true,
        },

        skillLevel: {
            type: String,
            enum: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
            default: "BEGINNER",
        },

        teamsJoined: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Team",
            },
        ],
        eventsJoined: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Event",
            },
        ],

        role: {
            type: String,
            enum: ["PLAYER", "ORGANIZER"],
            required: true,
        },

        rating: {
            type: Number,
        },

        refreshToken: {
            type: String,
        },
        

    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if(this.isModified("password") === false) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function (){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);
