// components/Product.jsx
import React from "react";

const Product = ({ title, price, oldPrice, tag, image, sale }) => {
  return (
    <div className="bg-white shadow p-4 relative">
      {sale && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          Sale
        </span>
      )}
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <p className="text-sm text-gray-500 mb-1">{tag}</p>
      <h3 className="text-md font-semibold text-gray-800">{title}</h3>
      <img className="h-[10px] " src="https://th.bing.com/th/id/R.6cb37ea4aefa761857545de63f8e8dde?rik=GRQ15jXlAUVPUw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2f5-Star-Rating-PNG-Transparent-HD-Photo.png&ehk=O0MsnrpiTmjbM4dy3SVkMGuet8gcSAxAxdxBPxfyzPk%3d&risl=&pid=ImgRaw&r=0" />
      <div className="text-sm text-gray-700">
        {oldPrice && <span className="line-through mr-2">{oldPrice}</span>}
        <span className="font-bold">{price}</span>
      </div>
    </div>
  );
};

export default Product;
