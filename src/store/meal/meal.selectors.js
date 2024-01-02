import { createSelector } from "@reduxjs/toolkit";

const selectMealState = (state) => state.meal;

export const selectMealList = createSelector(
  selectMealState,
  (mealState) => mealState.mealList
);

export const selectMealDetail = createSelector(
  selectMealState,
  (mealState) => mealState.mealDetail
);

export const selectMealIsLoading = createSelector(
  selectMealState,
  (mealState) => mealState.isLoading
);

export const selectMealError = createSelector(
  selectMealState,
  (mealState) => mealState.error
);
