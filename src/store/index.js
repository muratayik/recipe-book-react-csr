import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./category/category.slice";
import mealSlice from "./meal/meal.slice";
import authSlice from "./auth/auth.slice";
import favoriteSlice from "./favorite/favorite.slice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    meal: mealSlice,
    auth: authSlice,
    favorite: favoriteSlice,
  },
});
