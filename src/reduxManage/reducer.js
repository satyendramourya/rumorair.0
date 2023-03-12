import { CATEGORY } from "./action";

export const initialState = { category: "general" };

export const reducer = (state = initialState, action) => {
  if (action.type === CATEGORY) {
    return { category: action.payload };
  }

  return state;
};
