export const selectLoading = (state) => state.cart.loading;

export const selectCartProducts = (state) => state.cart.cartData.products;

export const selectTotalPrice = (state) => state.cart.cartData.totalPrice;

export const selectTotalProducts = (state) => state.cart.cartData.totalProducts;

export const selectCartData = (state) => state.cart.cartData;
