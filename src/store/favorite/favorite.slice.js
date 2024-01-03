import { createSlice } from "@reduxjs/toolkit";

import {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
} from "./favorite.actions";

const initialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    resetFavorites: (state) => {
      state.favorites = initialState.favorites;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favorites = action.payload;
    });

    builder.addCase(addToFavorites.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favorites.push(action.payload);
    });

    builder.addCase(removeFromFavorites.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favorites = state.favorites.filter(
        (f) => f.id !== action.payload.id
      );
    });
  },
});

export const { resetFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
