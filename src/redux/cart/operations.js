import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../helpers.js";

export const getUserCart = createAsyncThunk("cart/getUserCart", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/cart");
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ status: error.response?.status, message: errorMessage });
  }
});

export const addProductsToCart = createAsyncThunk("cart/addProductToCart", async (newProduct, thunkAPI) => {
  try {
    const response = await axios.put("/cart/update", {
      products: newProduct,
    });
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ status: error.response?.status, message: errorMessage });
  }
});

export const sendOrder = createAsyncThunk("cart/sendOrder", async (newOrder, thunkAPI) => {
  try {
    const response = await axios.post("/cart/checkout", {
      orderDetails: newOrder,
    });
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ status: error.response?.status, message: errorMessage });
  }
});
