// const asyncHandler = () => {}


export {asyncHandler}


const   asyncHandler = (fn) => async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
