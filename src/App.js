import React from "react";
import Intro from "./components/Introduction/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contacts from "./components/Contacts/Contacts";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contacts />
    </div>
  );
};

export default App;
