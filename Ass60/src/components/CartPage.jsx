import React from "react";
import CartList from "./CartList";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, onQuantityChange, onRemove }) => {
  const getTotal = () =>
    cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      return total + price * item.quantity;
    }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-8 bg-white max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some products to your cart to get started!</p>
        <Link to="/">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <CartList
        cartItems={cartItems}
        onQuantityChange={onQuantityChange}
        onRemove={onRemove}
      />

      <div className="flex items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Coupon code"
          className="border p-2 w-1/3"
        />
        <button className="bg-red-500 rounded text-white px-4 py-2">
          APPLY COUPON
        </button>
        <button className="bg-red-300 rounded text-white px-4 py-2 ml-auto">
          UPDATE CART
        </button>
      </div>

      <div className="mt-8 w-full md:w-2/3 ml-auto border p-4 rounded overflow-auto">
        <h2 className="font-bold text-lg mb-4">Cart totals</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
