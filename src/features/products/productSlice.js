import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch all products from API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data; // Return product data to the reducer
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Array to store fetched products
    loading: false, // Indicates if products are being fetched
    error: null, // Stores error message if fetch fails
  },
  reducers: {
    // You can add other synchronous product-related reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // When API call is initiated
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // When API call succeeds
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      // When API call fails
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//  Export reducer for store configuration
export default productSlice.reducer;
