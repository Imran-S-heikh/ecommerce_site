import request from "./request";
import { catchAsync } from "../utils";

export const getSiteProperties = catchAsync(async ()=>{
    const response = await request({},`/others/siteProperties`,'GET')
    return response;
});

export const updateSiteProperties = catchAsync(async (data)=>{
    const response = await request(data,`/others/siteProperties`)
    return response;
});

export const getCoupons = catchAsync(async ()=>{
    const response = await request({},`/others/coupons`,'GET')
    return response;
});

export const createCoupon = catchAsync(async (data)=>{
    const response = await request(data,`/others/coupons`)
    return response;
});