import { catchAsync, extractFilter } from "../utils";
import request from "./request";

export const createProduct = catchAsync(async (newProduct)=>{
    const response = await request(newProduct,'/products')
    return response;
});

export const getProducts = catchAsync(async (query='')=>{
    const response = await request({},`/Products${query}`,'GET')
    return response;
});

export const updateProduct = catchAsync(async (updatedProduct,id)=>{
    const response = await request(updatedProduct,`/Products/${id}`,'PATCH')
    return response;
});