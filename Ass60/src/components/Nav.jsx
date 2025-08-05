import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = ({ cartItemCount = 0 }) => {
  return (
    <nav className="bg-white shadow py-6 px-10 flex items-center justify-between">
      <div className="flex items-center ml-[150px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="h-6"
        />
      </div>
      <div className="flex items-center gap-4">
        <Link to="/add-product">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Add Product
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <button className="text-4xl">
            <CiShoppingCart />
          </button>
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
