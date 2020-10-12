import React from "react";
import "./styles/App.scss";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BarInfo from "./components/BarInfo";
import BarCarousel from "./components/BarCarousel";
import Menus from "./components/Menus";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <BarInfo />
      <BarCarousel />
      <Menus />
    </React.Fragment>
  );
}

export default App;
