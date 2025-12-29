import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Feedbacks from "./components/Feedbacks";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Feedbacks />
      <Prices />
      <Contact />
    </div>
    
  );
}

export default App;
