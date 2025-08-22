import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
