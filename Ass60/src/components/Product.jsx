// components/Product.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Product = ({
  title,
  price,
  tag,
  thumbnail,
  sale,
  oldPrice,
  id,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-all"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4 space-y-1">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{tag}</p>
        <div className="flex items-center gap-2">
          <p className="font-bold text-black">{price}</p>
          {sale === "true" && oldPrice && (
            <p className="line-through text-red-500 text-sm">{oldPrice}</p>
          )}
        </div>
        <Link
          to={`/product/${id}`}
          className="text-blue-500 underline mt-2 inline-block"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Product;
