import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

// Cross Origin Resource Sharing (CORS) setup for APIs
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// json data setup
app.use(express.json({
    limit: "16kb"
}));

// url encoded data setup
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

// assets setup
app.use(express.static("public"));

// cookie parser setup
app.use(cookieParser());

export {app};