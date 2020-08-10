import { atom } from "recoil";
import { SEARCH_OPEN, MAIN_DRAWER_OPEN } from "./keys";

export const searchOpenState = atom({
    key: SEARCH_OPEN,
    default: false
});

export const mainDrawerState = atom({
    key: MAIN_DRAWER_OPEN,
    default: false
});