export const selectLoading = (state) => state.products.loading;

export const selectProductsCategories = (state) => state.products.categories;

export const selectProducts = (state) => state.products.products;

export const selectTotalPages = (state) => state.products.products.totalPages;

export const selectPage = (state) => state.products.products.page;

export const selectHasNextPage = (state) => state.products.products.hasNextPage;

export const selectHasPrevPage = (state) => state.products.products.hasPreviousPage;
