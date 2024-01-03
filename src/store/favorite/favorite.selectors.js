import { createSelector } from "@reduxjs/toolkit";

const selectFavorite = (state) => state.favorite;

export const selectFavorites = createSelector(
  selectFavorite,
  (favoriteState) => favoriteState.favorites
);

export const isInFavorites = createSelector(
  selectFavorite,
  (_, mealPublicId) => mealPublicId,
  (favoriteState, mealPublicId) =>
    !!favoriteState.favorites.find((f) => f.publicId === mealPublicId)
);
