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