import { catchAsync } from "../utils";
import request from "./request";

export const createProduct = catchAsync(async (newProduct)=>{
    const response = await request(newProduct,'/products')
    return response;
});

export const getProducts = catchAsync(async ()=>{
    const response = await request({},'/products','GET')
    return response;
});