import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage if present
const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem("cartItems");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    return [];
  }
};

// Save cart items to localStorage whenever state changes
const saveCart = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// Create cart slice with Redux Toolkit
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCart(),
  },
  reducers: {
    // Add product to cart or increase quantity if already in cart
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      saveCart(state.cartItems);
    },

    // Remove product from cart by ID
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveCart(state.cartItems);
    },

    // Increase quantity of specific product by ID
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
      saveCart(state.cartItems);
    },

    // Decrease quantity of specific product by ID, min quantity is 1
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      saveCart(state.cartItems);
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.cartItems = [];
      saveCart([]);
    },
  },
});

// Export actions for use in components
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// Export reducer to be added to Redux store
export default cartSlice.reducer;
