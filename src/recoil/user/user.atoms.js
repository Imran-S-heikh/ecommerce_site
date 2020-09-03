import { atom } from "recoil";
import { USER, USER_CART } from "./user.keys";

export const userState = atom({
    key: USER,
    default: null
});

export const userCartState= atom({
    key: USER_CART,
    default: []
});