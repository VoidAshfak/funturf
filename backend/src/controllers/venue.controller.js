import { pgClient } from '../prisma';
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";


const getVenues = asyncHandler(async (req, res) => {
    const rawLimit = Number(req.query.limit ?? 10);
    const limit = isFinite(rawLimit) ? Math.min(Math.max(rawLimit, 1), 100) : 10;

    const cursorStr = typeof req.query.cursor === "string" ? req.query.cursor : undefined;

    let cursor = undefined;

    if (cursorStr) {
        const splitAt = cursorStr.lastIndexOf("_");
        if (splitAt === -1) {
            return res.status(400).json({
                success: false,
                error: "BAD_CURSOR",
                message: "Invalid cursor format"
            });
        }

    }
})

export {
    getVenues
}