import { createSelector } from "@reduxjs/toolkit";

const selectAuth = (state) => state.auth;

export const selectAuthIsLoggedIn = createSelector(
  selectAuth,
  (authState) => authState.isLoggedIn
);
