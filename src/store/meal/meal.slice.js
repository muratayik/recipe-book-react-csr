import { createSlice } from "@reduxjs/toolkit";

import { fetchMealDetail, fetchMealsOfCategory } from "./meal.actions";

const initialState = {
  mealList: [],
  mealDetail: null,
  isLoading: false,
  error: null,
};

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchMealsOfCategory
    builder.addCase(fetchMealsOfCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMealsOfCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mealList = action.payload;
    });
    builder.addCase(fetchMealsOfCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // fetchMealDetail
    builder.addCase(fetchMealDetail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMealDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mealDetail = action.payload;
    });

    builder.addCase(fetchMealDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default mealSlice.reducer;
