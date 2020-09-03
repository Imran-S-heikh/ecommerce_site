import { atom } from "recoil";
import { USER, USER_CART, WISH_LIST } from "./user.keys";

export const userState = atom({
    key: USER,
    default: null
});

export const userCartState= atom({
    key: USER_CART,
    default: []
});

export const userWishListState= atom({
    key: WISH_LIST,
    default: []
});