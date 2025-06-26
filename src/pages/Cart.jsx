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
    cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-500 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-base sm:text-lg">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-500 text-white">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Your Shopping Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4 sm:space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white bg-opacity-90 text-gray-800 rounded-xl shadow-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 flex-1">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md"
              />
              <div>
                <h2 className="font-semibold text-base sm:text-lg">{item.title}</h2>
                <p className="text-cyan-700 font-medium text-sm sm:text-base">
                  ${item.price}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-l"
                  >
                    −
                  </button>
                  <span className="px-4 font-semibold text-blue-700">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-right sm:text-center">
              <p className="text-base sm:text-lg font-bold text-teal-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-sm text-red-500 hover:underline mt-2 sm:mt-4 block"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price & Clear Button */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xl sm:text-2xl font-bold text-white">
          Total: ${getTotalPrice()}
        </p>
        <button
          onClick={() => dispatch(clearCart())}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow w-full sm:w-auto"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
