import { atom } from "recoil";
import { SEARCH_OPEN } from "./keys";

export const searchOpenState = atom({
    key: SEARCH_OPEN,
    default: false
})