import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../features/cart/cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-500 text-white">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-lg">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-500 text-white">
      <h1 className="text-4xl font-bold mb-8">Your Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white bg-opacity-90 text-gray-800 rounded-xl shadow-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-md"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-cyan-700 font-medium">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-l"
                  >
                    −
                  </button>
                  <span className="px-4 font-semibold text-blue-700">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-teal-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-sm text-red-500 hover:underline mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <p className="text-2xl font-bold text-white">Total: ${getTotalPrice()}</p>
        <button
          onClick={() => dispatch(clearCart())}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
