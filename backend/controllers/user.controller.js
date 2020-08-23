const catchAsync = require("../utils/catchAsync.util");
const User = require("../models/User.model");



exports.getUser = catchAsync(async (req,res,next)=>{
    const user = User.findById(req.params.id)

    res.status(200).json({
        status: 'success',
        user
    })
});