import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Fotos from "./components/Fotos";
import Videos from "./components/Videos";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="sections">
        <Home />
        {/* <Fotos/>
        <Videos/>
        <About />
        <Pricing />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;
