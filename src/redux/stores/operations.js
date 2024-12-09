import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../helpers.js";

export const fetchNearestStores = createAsyncThunk("stores/fetchNearest", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/stores/nearest");
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const fetchCustomerReviews = createAsyncThunk("stores/fetchCustomerReviews", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/customer-reviews");
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const fetchAllStores = createAsyncThunk("stores/fetchAllStores", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/stores");
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});
