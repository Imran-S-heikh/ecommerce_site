import { catchAsync } from "../utils";
import request from "./request";

export const createProduct = catchAsync(async (newProduct)=>{
    const response = await request(newProduct,'/products')
    return response;
});