import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Load wishlist items from localStorage if available, otherwise empty array
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Add product to wishlist
    addToWishlist: (state, action) => {
      const exists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.wishlistItems.push({ ...action.payload }); // Add item if not already present
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        ); // Persist updated wishlist to localStorage
      }
    },

    // Remove product from wishlist by ID
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      ); // Persist updated wishlist
    },
  },
});

// Export actions to be used in components
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Export reducer to be added to Redux store
export default wishlistSlice.reducer;
