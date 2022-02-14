import "./App.css";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
        <AboutMe />
      </header>
    </div>
  );
}

export default App;
