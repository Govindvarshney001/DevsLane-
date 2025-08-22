import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id/" element={<ProductDetails />} />
        <Route path="/product/:id/card/" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
