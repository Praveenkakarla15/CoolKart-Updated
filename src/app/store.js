import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartslice";
import wishlistReducer from "../features/Wishlist/WishlistSlice"; // 

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer, //
  },
});
export default store;
