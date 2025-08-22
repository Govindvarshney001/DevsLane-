import React from "react";

const CartRow = ({ item, onQuantityChange, onRemove }) => {
  const price = parseFloat(item.price) || 0;
  const subtotal = (price * item.quantity).toFixed(2);

  return (
    <tr className="border-b">
      <td className="p-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover"
        />
      </td>
      <td className="p-4">{item.title}</td>
      <td className="p-4">${price.toFixed(2)}</td>
      <td className="p-4">
        <input
          type="number"
          min={1}
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, e.target.value)}
          className="w-16 border p-1 text-center"
        />
      </td>
      <td className="p-4">${subtotal}</td>
      <td className="p-4">
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
