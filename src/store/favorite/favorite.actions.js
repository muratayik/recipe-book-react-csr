import { createAsyncThunk } from "@reduxjs/toolkit";

import * as TokenUtils from "../../utils/token.utils";
import * as ApiUtils from "../../utils/api.utils";

import { resetFavorites } from "./favorite.slice";

const generateAuthorizationHeader = (token) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});

export const fetchFavorites = createAsyncThunk(
  "favorite/fetchFavorites",
  async () => {
    const token = TokenUtils.getToken();

    if (!token) {
      return [];
    }

    const headers = generateAuthorizationHeader(token);

    return await ApiUtils.get("/favorite", headers);
  }
);

export const addToFavorites = createAsyncThunk(
  "favorite/addToFavorites",
  async (mealPublicId) => {
    const token = TokenUtils.getToken();

    if (!token) {
      alert("You must login to use this functionality");
      return [];
    }

    const headers = generateAuthorizationHeader(token);
    const data = { mealPublicId };

    return await ApiUtils.post("/favorite/add", data, headers);
  }
);

export const removeFromFavorites = createAsyncThunk(
  "favorite/removeFromFavorites",
  async (mealPublicId) => {
    const token = TokenUtils.getToken();

    if (!token) {
      alert("You must login to use this functionality");
      return [];
    }

    const headers = generateAuthorizationHeader(token);
    const data = { mealPublicId };

    return await ApiUtils.post("/favorite/remove", data, headers);
  }
);

export { resetFavorites };
