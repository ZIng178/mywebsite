import React from "react";
import "./App.css";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
