import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { initialState, logout } from "./auth.slice";
import * as TokenUtils from "../../utils/token.utils";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }) => {
    const data = { email, password };
    const res = await axios.post("http://localhost:3001/account/login", data);
    const resData = await res.data;

    const { token } = resData;

    TokenUtils.clearTokens();

    if (rememberMe) {
      TokenUtils.setLocalStorageToken(token);
    } else {
      TokenUtils.setSessionStorageToken(token);
    }

    return resData;
  }
);

export const autoLogin = createAsyncThunk("auth/autoLogin", async () => {
  const localStorageToken = TokenUtils.getToken();
  if (!localStorageToken) return initialState;

  const data = {
    token: localStorageToken,
  };

  const res = await axios.post("http://localhost:3001/account/verify", data);
  const resData = await res.data;

  return { ...resData, isLoggedIn: true };
});

export const logoutUser = () => (dispatch) => {
  TokenUtils.clearTokens();
  dispatch(logout());
};
