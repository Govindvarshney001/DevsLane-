import React from "react";
import CartRow from "./CartRow";

const CartList = ({ cartItems, onQuantityChange, onRemove }) => {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4"></th>
          <th className="p-4 text-left">Product</th>
          <th className="p-4 text-left">Price</th>
          <th className="p-4 text-left">Quantity</th>
          <th className="p-4 text-left">Subtotal</th>
          <th className="p-4 text-left">Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <CartRow
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartList;
