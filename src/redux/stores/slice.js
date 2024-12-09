import { createSlice } from "@reduxjs/toolkit";
import { fetchAllStores, fetchCustomerReviews, fetchNearestStores } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const storesSlice = createSlice({
  name: "stores",
  initialState: {
    allStores: [],
    nearestStores: [],
    loading: false,
    error: null,
    customerReviews: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearestStores.pending, handlePending)
      .addCase(fetchNearestStores.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.nearestStores = action.payload.data;
      })
      .addCase(fetchNearestStores.rejected, handleRejected)

      .addCase(fetchCustomerReviews.pending, handlePending)
      .addCase(fetchCustomerReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.customerReviews = action.payload.data;
      })
      .addCase(fetchCustomerReviews.rejected, handleRejected)

      .addCase(fetchAllStores.pending, handlePending)
      .addCase(fetchAllStores.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.allStores = action.payload.data;
      })
      .addCase(fetchAllStores.rejected, handleRejected);
  },
});

export const storesReduser = storesSlice.reducer;
