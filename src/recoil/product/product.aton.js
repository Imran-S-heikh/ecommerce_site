import { atom } from "recoil";
import { SINGLE_PRODUCT_ID } from "./product.keys";

export const singleProductId= atom({
    key: SINGLE_PRODUCT_ID,
    default: '5f64d83688568d2bbae7e9ac'
});