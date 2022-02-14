import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
      </header>
    </div>
  );
}

export default App;
