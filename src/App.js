import "./App.css";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
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
      </header>
    </div>
  );
}

export default App;
