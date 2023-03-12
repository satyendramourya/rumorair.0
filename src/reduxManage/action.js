export const CATEGORY = "category";

export const setCategory = (category) => {
  return {
    type: CATEGORY,
    payload: category,
  };
};
