import { createSelector } from "@reduxjs/toolkit";

const selectCategoryState = (state) => state.category;

export const selectCategories = createSelector(
  selectCategoryState,
  (categoryState) => categoryState.categories
);

export const selectCategoryIsLoading = createSelector(
  selectCategoryState,
  (categoryState) => categoryState.isLoading
);

export const selectCategoryIsFetched = createSelector(
  selectCategoryState,
  (categoryState) => categoryState.isFetched
);

export const selectCategoryError = createSelector(
  selectCategoryState,
  (categoryState) => categoryState.error
);
