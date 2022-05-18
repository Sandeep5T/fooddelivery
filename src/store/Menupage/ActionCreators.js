import { Add, Remove } from "./ActionTypes";

export const addToCart = (name) => ({ type: Add, name });

export const removeFromCart = (name) => ({ type: Remove, name });
