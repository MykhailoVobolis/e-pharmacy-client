import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../helpers.js";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

// Регістрація нового користувача
export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  try {
    const response = await axios.post("/user/register", newUser);
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
    setAuthHeader(response.data.token);

    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

// Логін користувача
export const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post("/user/login", userInfo);
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
    setAuthHeader(response.data.token);

    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

// Вихід користувача
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/user/logout");
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
    // Читання токіна з Local Storage
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
    setAuthHeader(savedToken);

    const response = await axios.get("/user/refresh");
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      // Перевіряємо, чи є збережений в Local Storage токін.
      // Якщо так, виконується логін за токіном
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
