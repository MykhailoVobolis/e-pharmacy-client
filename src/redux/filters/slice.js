import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterProducts: {
      name: "",
      category: "",
      discount: "",
      page: 1,
      perPage: 12,
    },
  },
  reducers: {
    changeFilterProducts: (state, action) => {
      state.filterProducts = { ...state.filterProducts, ...action.payload };
    },
    changeProductPage: (state, action) => {
      state.filterProducts.page = action.payload;
    },
  },
});

export const filtersReduser = filtersSlice.reducer;
export const { changeFilterProducts, changeProductPage } = filtersSlice.actions;
