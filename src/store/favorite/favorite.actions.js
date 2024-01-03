import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import * as TokenUtils from "../../utils/token.utils";

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
    const res = await axios.get("http://localhost:3001/favorite", { headers });
    const resData = await res.data;
    return resData;
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
    const res = await axios.post("http://localhost:3001/favorite/add", data, {
      headers,
    });
    const resData = await res.data;
    return resData;
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
    const res = await axios.post(
      "http://localhost:3001/favorite/remove",
      data,
      {
        headers,
      }
    );
    const resData = await res.data;
    return resData;
  }
);

export { resetFavorites };
