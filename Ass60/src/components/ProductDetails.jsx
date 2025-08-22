// components/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { getProductById } from "../api"; 
import NotFound from "./NotFound";

const ProductDetails = ({ addToCart }) => {
  const id = +useParams().id; 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1); 

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false)
      });
  }, [id]); 

  const handleCountChange = (e) => {
    setCount(+e.target.value);
  }

  const handleAddToCart = () => {
    if (product && addToCart) {
      addToCart(product, count);
      alert(`${count} ${product.title} added to cart!`);
    }
  }

  if(loading){
    return <Loading />;
  }
  if (!product) {
    return <NotFound />; 
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
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover rounded"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-xl font-bold text-gray-800">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={count}
              onChange={handleCountChange}
              min={1}
              className="w-16 border border-gray-300 rounded px-2 py-1"
            />
            <button 
              onClick={handleAddToCart}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly m-5">
        <div>
          {id > 1 && (
            <Link to={`/product/${id - 1}`}>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Previous Product
              </button>
            </Link>
          )}
        </div>
        <div>
          <Link to={"/product/" + (id + 1)}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Next Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
