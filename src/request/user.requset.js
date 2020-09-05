import request from "./request"
import { catchAsync } from "../utils"

export const createUser = catchAsync(async (user) => {
    const response = await request(user, '/users/signup');
    return response;
});

export const userLogin = catchAsync(async (data) => {
    console.log(data);
    const response = await request(data, '/users/login');
    return response;
})

export const getAllUser = catchAsync(async () => {
    const response = await request({}, '/users','GET');
    return response;
})

export const checkUser = catchAsync(async () => {
    const response = await request({}, '/users');
    return response;
})

export const forgetPassword = catchAsync(async (data) => {
    console.log(data)
    const response = await request(data, '/users/forgetPassword');
    return response;
})

export const resetPassword = catchAsync(async (data,token) => {
    console.log(data)
    const response = await request(data, `/users/resetPassword/${token}`,'PATCH');
    return response;
})