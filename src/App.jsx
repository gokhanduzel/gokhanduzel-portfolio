import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="radial-fade"></div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
