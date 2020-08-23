const catchAsync = require("../utils/catchAsync.util");
const User = require("../models/User.model");
const jwt = require('jsonwebtoken');
const createToken = require("../utils/createToken");



exports.signUp = catchAsync(async (req,res,next)=>{
    const newUser = await User.create(req.body);

    newUser.password = undefined;

    const token = createToken(newUser._id);

    res.cookie('jwt',token,{
        expires: new Date(Date.now() + (1000*60*60)),
        sameSite: 'strict'
    });

    res.status(200).json({
        status: 'success',
        token,
        user: newUser
    });
});


exports.signIn = catchAsync(async (req,res,next)=>{
    const user = await User.findOne({email: req.body.email}).select('+password');

    if(!await user.checkPassword(req.body.password,user.password))return next();

    const token = createToken(user._id);
    user.password = undefined;

    res.cookie('jwt',token,{
        expires: new Date(Date.now() + (1000*60*60)),
        sameSite: 'strict'
    });

    res.status(200).json({
        status: 'success',
        token,
        user
    });
});


