// components/ProductDetails.jsx
import React from "react";

const ProductDetails = () => {
  // Demo/static product data
  const product = {
    title: "Demo Product",
    price: "$99.00",
    tag: "Mugs",
    image: "https://th.bing.com/th/id/OIP.Egob8_-aUCeV8QHyRY_iFwHaFj?pid=ImgDetMain",
    description: "This is a demo product for testing view details route.",
  };

  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto object-cover rounded"
      />
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p className="text-xl font-bold text-gray-800">{product.price}</p>
        <p className="text-gray-600">{product.description}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
