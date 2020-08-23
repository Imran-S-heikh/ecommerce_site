const catchAsync = require("../utils/catchAsync.util");
const User = require("../models/User.model");



exports.signIn = catchAsync((req,res,next)=>{
    const newUser = User.create(req.body);

    res.status(200).json({
        status: 'success',
        user: newUser
    });
});