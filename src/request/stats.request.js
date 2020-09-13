import request from "./request"
import { catchAsync } from "../utils"

export const getStat = catchAsync(async (_,stat) => {
    const response = await request({}, `/stats/${stat}`,'GET');
    return response;
});