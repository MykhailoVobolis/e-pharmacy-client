import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../helpers.js";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (filterParams, thunkAPI) => {
  try {
    const response = await axios.get("/products", {
      params: filterParams,
    });

    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const fetchProductsCategories = createAsyncThunk("products/fetchProductsCategories", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/products/categories");

    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const fetchProductById = createAsyncThunk("products/fetchProductById", async (productId, thunkAPI) => {
  try {
    const response = await axios.get(`/products/${productId}`);

    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});
