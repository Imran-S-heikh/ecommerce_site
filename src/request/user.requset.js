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

export const getSingleUser = catchAsync(async (id) => {
    const response = await request({}, `/users/${id}`,'GET');
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

export const searchUser = catchAsync(async (searchString) => {
    const response = await request({}, `/users?search=${searchString}`,'GET');
    return response;
})

export const createModarator = catchAsync(async (data,id) => {
    const response = await request(data, `/users/update-admin/${id}`,'PATCH');
    return response;
})

export const updateUser = catchAsync(async (data,id) => {
    const response = await request(data, `/users/${id}`,'PATCH');
    return response;
})

export const getAdmins = catchAsync(async () => {
    const response = await request({}, `/users/admins`,'POST');
    return response;
})

export const signinWithGoogle = catchAsync(async (data) => {
    const response = await request(data, `/users/signinWithGoogle`,'POST');
    return response;
})


