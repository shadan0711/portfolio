import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Bookshelf/Projects";
import Journey from "./components/Journey/Journey";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;