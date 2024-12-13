import { createSlice } from "@reduxjs/toolkit";
import { addProductsToCart, deleteProductCart, getUserCart } from "./operations.js";

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
    cartData: {
      products: [],
      totalPrice: 0,
      totalProducts: 0,
    },
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.pending, handlePending)
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cartData.products = action.payload.data.products;
        state.cartData.totalPrice = action.payload.data.totalPrice;
        state.cartData.totalProducts = action.payload.data.totalProducts;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.status === 404) {
          state.cartData.products = [];
          state.cartData.totalPrice = 0;
          state.cartData.totalProducts = 0;
          state.error = null; // Це не вважається помилкою, просто порожній кошик.
        } else {
          handleRejected(state);
        }
      })

      .addCase(deleteProductCart.pending, handlePending)
      .addCase(deleteProductCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cartData.products = action.payload.data.products;
        state.cartData.totalPrice = action.payload.data.totalPrice;
        state.cartData.totalProducts = action.payload.data.totalProducts;
      })
      .addCase(deleteProductCart.rejected, handleRejected)

      .addCase(addProductsToCart.pending, handlePending)
      .addCase(addProductsToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cartData.products = action.payload.data.products;
        state.cartData.totalPrice = action.payload.data.totalPrice;
        state.cartData.totalProducts = action.payload.data.totalProducts;
      })
      .addCase(addProductsToCart.rejected, handleRejected);
  },
});

export const cartReduser = cartSlice.reducer;
