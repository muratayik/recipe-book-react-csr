import { createSlice } from "@reduxjs/toolkit";

import { autoLogin, login } from "./auth.actions";

export const initialState = {
  isLoading: false,
  isLoggedIn: false,
  email: "",
  username: "",
  role: "",
  token: "",
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { email, role, token, username } = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.email = email;
      state.role = role;
      state.token = token;
      state.username = username;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(autoLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(autoLogin.fulfilled, (state, action) => {
      const { email, role, username, token, isLoggedIn } = action.payload;
      state.isLoading = false;
      state.isLoggedIn = isLoggedIn;
      state.email = email;
      state.role = role;
      state.username = username;
      state.token = token;
    });
    builder.addCase(autoLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
