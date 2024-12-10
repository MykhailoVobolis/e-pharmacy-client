import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductsCategories } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {
      data: [],
      hasNextPage: null,
      hasPreviousPage: null,
      page: 1,
      perPage: 12,
      totalItems: null,
      totalPages: null,
    },
    categories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload.data;
      })
      .addCase(fetchProducts.rejected, handleRejected)

      .addCase(fetchProductsCategories.pending, handlePending)
      .addCase(fetchProductsCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = action.payload.data;
      })
      .addCase(fetchProductsCategories.rejected, handleRejected);
  },
});

export const productsReduser = productsSlice.reducer;