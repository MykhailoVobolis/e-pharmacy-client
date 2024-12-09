import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
  state.authProcess = true;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
  state.authProcess = false;
};

// Стан даних про користувача
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefrreshing: false,
    loading: false,
    authProcess: true,
    error: null,
  },
  reducers: {
    setTokens(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearTokens(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
    finishAuthProcess(state) {
      state.authProcess = false; // Завершення перевірки сесії
    },
  },
  extraReducers: (builder) => {
    builder
      // Обробка операції регістрації користувача
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.authProcess = false;
      })
      .addCase(register.rejected, handleRejected)
      // Обробка операції логіну користувача
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.authProcess = false;
      })
      .addCase(logIn.rejected, handleRejected)
      // Обробка операції логауту (вихода користувача з облікового запису App)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user = {
          name: null,
          email: null,
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.authProcess = false;
      })
      .addCase(logOut.rejected, handleRejected)
      // Обробка операції рефрешу користувача
      .addCase(refreshUser.pending, (state) => {
        state.isRefrreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.userName;
        state.user.email = action.payload.userEmail;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefrreshing = false;
        state.authProcess = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefrreshing = false;
        state.authProcess = false;
      });
  },
});

export const { setTokens, clearTokens, finishAuthProcess } = authSlice.actions;
export const authReduser = authSlice.reducer;
