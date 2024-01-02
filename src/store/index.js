import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./category/category.slice";
import mealSlice from "./meal/meal.slice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    meal: mealSlice,
  },
});
