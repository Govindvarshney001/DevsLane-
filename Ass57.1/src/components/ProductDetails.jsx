// components/ProductDetails.jsx
import React from "react";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto object-cover rounded"
      />
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p className="text-xl font-bold text-gray-800">{product.price}</p>
        <p className="text-gray-600">
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
          numquam eius modi tempora incidunt lores ta porro ame.
        </p>
        <div className="flex items-center gap-4">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-16 border border-gray-300 rounded px-2 py-1"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded">
            ADD TO CART
          </button>
          <button onClick={onClose} className="ml-auto text-red-500 underline">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
