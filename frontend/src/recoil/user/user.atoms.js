import { atom } from "recoil";
import { USER } from "./user.keys";

export const userState = atom({
    key: USER,
    default: null
});