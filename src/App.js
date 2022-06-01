import React from "react";
import Intro from "./components/Introduction/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contacts />
    </div>
  );
};

export default App;
