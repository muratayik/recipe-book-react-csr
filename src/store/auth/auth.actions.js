import { createAsyncThunk } from "@reduxjs/toolkit";

import { initialState, logout } from "./auth.slice";
import * as TokenUtils from "../../utils/token.utils";
import * as ApiUtils from "../../utils/api.utils";

import { showErrorToastr } from "../../utils/toastr.utils";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const data = { email, password };

      const resData = await ApiUtils.post("/account/login", data);

      const { token } = resData;

      TokenUtils.clearTokens();

      if (rememberMe) {
        TokenUtils.setLocalStorageToken(token);
      } else {
        TokenUtils.setSessionStorageToken(token);
      }

      return resData;
    } catch (error) {
      showErrorToastr(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const data = { email, password, username };

      const resData = await ApiUtils.post("/account/register", data);

      const { token } = resData;

      TokenUtils.setLocalStorageToken(token);

      return resData;
    } catch (error) {
      showErrorToastr(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const autoLogin = createAsyncThunk(
  "auth/autoLogin",
  async ({ rejectWithValue }) => {
    const localStorageToken = TokenUtils.getToken();
    if (!localStorageToken) return initialState;

    try {
      const data = {
        token: localStorageToken,
      };

      const resData = await ApiUtils.post("/account/verify", data);

      return { ...resData, isLoggedIn: true };
    } catch {
      TokenUtils.clearTokens();
      return rejectWithValue();
    }
  }
);

export const logoutUser = () => (dispatch) => {
  TokenUtils.clearTokens();
  dispatch(logout());
};
