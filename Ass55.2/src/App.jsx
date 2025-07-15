import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
