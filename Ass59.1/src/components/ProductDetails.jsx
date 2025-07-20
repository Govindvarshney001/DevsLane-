// components/ProductDetails.jsx
import React from "react";
import Alldata from "../ALLdata";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
     const {id} = useParams();

    let product ;

    for(let i =0;i<Alldata.length;i++){
        if(Alldata[i].id == id){
            product = Alldata[i];
        }
    }
   

  return (
    <div>
      <div className="m-5">
        <Link to="/">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Back to Home
          </button>
        </Link>
      </div>
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
            <Link to={`/Product/${id}/card`}>
              <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded">
                ADD TO CART
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
 