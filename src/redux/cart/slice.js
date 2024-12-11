import { createSlice } from "@reduxjs/toolkit";
import { addProductsToCart, getUserCart } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    totalProducts: 0,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, handlePending)
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload.data.products;
        state.totalPrice = action.payload.data.totalPrice;
        state.totalProducts = action.payload.data.totalProducts;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.status === 404) {
          state.products = [];
          state.totalPrice = 0;
          state.totalProducts = 0;
          state.error = null; // Це не вважається помилкою, просто порожній кошик.
        } else {
          handleRejected(state);
        }
      })

      .addCase(addProductsToCart.pending, handlePending)
      .addCase(addProductsToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload.data.products;
        state.totalPrice = action.payload.data.totalPrice;
        state.totalProducts = action.payload.data.totalProducts;
      })
      .addCase(addProductsToCart.rejected, handleRejected);
  },
});

export const cartReduser = cartSlice.reducer;
