import React, { useState } from "react";
import CartList from "./CartList";
import Alldata from "../ALLdata";

const CartPage = () => {
  // Add quantity: 1 to each item initially
  const [cartItems, setCartItems] = useState(
    Alldata.map((item) => ({ ...item, quantity: 1 }))
  );

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "")) || 0;
      return total + price * item.quantity;
    }, 0);

  return (
    <div className="p-8 bg-white max-w-7xl mx-auto">
      <CartList
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
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
