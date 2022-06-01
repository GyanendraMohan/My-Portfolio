import React from "react";
import Intro from "./components/Introduction/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;
