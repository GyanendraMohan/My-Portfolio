import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import ResearchFocus from "./components/ResearchFocus/ResearchFocus";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import ProductList from "./components/ProductList/ProductList";
import Contacts from "./components/Contacts/Contacts";
import { ThemeContext } from "./context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={darkMode ? "theme-dark" : "theme-light"}
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        transition: "var(--transition)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Navbar />
      <div id="home">
        <Intro />
      </div>
      <div id="research">
        <ResearchFocus />
      </div>
      <div id="featured">
        <FeaturedProject />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="publications">
        <ProductList />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contacts />
      </div>
    </div>
  );
};

export default App;
