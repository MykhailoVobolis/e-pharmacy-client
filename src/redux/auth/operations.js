import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../helpers.js";
import { clearAuthHeader, setAuthHeader } from "../../utils/authAPI.js";
import { setTokens } from "./slice.js";

// Регістрація нового користувача
export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  try {
    const response = await axios.post("/user/register", newUser);
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
    setAuthHeader(response.data.data.accessToken);

    return response.data.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

// Логін користувача
export const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  try {
    const loginResponse = await axios.post("/user/login", userInfo);
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
    setAuthHeader(loginResponse.data.data.accessToken);

    // Отримання повної інформації про користувача
    const userInfoResponse = await axios.get("/user/user-info");

    return {
      accessToken: loginResponse.data.data.accessToken,
      refreshToken: loginResponse.data.data.refreshToken,
      user: {
        name: userInfoResponse.data.data.userName,
        email: userInfoResponse.data.data.userEmail,
      },
    };
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

// Вихід користувача
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/user/logout");
    // Видалення хедеру при виходу користувача з App
    clearAuthHeader();
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

// Рефреш користувача.
// Збереження данних користувача при перезавантаженні App
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Читання refreshToken з Redux або LocalStorage
    const reduxState = thunkAPI.getState();
    const savedRefreshToken = reduxState.auth.refreshToken;

    // Перевіряємо, чи є refreshToken в Redux
    if (!savedRefreshToken) {
      return thunkAPI.rejectWithValue("No refresh token available");
    }

    try {
      // Надсилаємо запит на сервер для отримання нового accessToken
      const response = await axios.post("/user/refresh", {
        refreshToken: savedRefreshToken,
      });

      const { accessToken, refreshToken } = response.data.data;

      // Оновлюємо токени в Redux
      thunkAPI.dispatch(setTokens({ accessToken, refreshToken }));

      // Оновлюємо хедер з новим accessToken
      setAuthHeader(accessToken);

      // Повертаємо нові дані користувача після успішного оновлення токенів
      const userResponse = await axios.get("/user/user-info");
      return userResponse.data.data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  },
  {
    condition(_, thunkAPI) {
      // Перевіряємо, чи є збережений в LocalStorage refreshToken
      const reduxState = thunkAPI.getState();
      const savedRefreshToken = reduxState.auth.refreshToken;
      return savedRefreshToken !== null;
    },
  }
);
