import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],         // all products from API
    filteredList: [], // filtered based on search
    searchTerm: ""
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
      state.filteredList = action.payload; // default all products
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
      state.filteredList = state.list.filter(product =>
        product.title.toLowerCase().includes(state.searchTerm)
      );
    }
  }
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;