import { atom } from "recoil";
import { SEARCH_OPEN, MAIN_DRAWER_OPEN, CART_DRAWER_OPEN, SIDE_DRAWER_OPEN, SLIDE_CHANGE, DASH_DRAWER_OPEN, DARK_MODE, DASH_BOARD_ROUTES, UPDATE_PRODUCT } from "./keys";
import { routes } from "../utils";

export const searchOpenState = atom({
    key: SEARCH_OPEN,
    default: false
});

export const mainDrawerState = atom({
    key: MAIN_DRAWER_OPEN,
    default: false
});

export const cartDrawerState = atom({
    key: CART_DRAWER_OPEN,
    default: false
});

export const sideDrawerState = atom({
    key: SIDE_DRAWER_OPEN,
    default: false
});

export const slideChangeEvent = atom({
    key: SLIDE_CHANGE,
    default: false
});

export const dashDrawerState = atom({
    key: DASH_DRAWER_OPEN,
    default: true
});

export const darkModeState = atom({
    key: DARK_MODE,
    default: true
});

export const dashboardRouteState = atom({
    key: DASH_BOARD_ROUTES,
    default: routes.CREATE_PRODUCT
});

export const updateProductState = atom({
    key: UPDATE_PRODUCT,
    default: {}
});