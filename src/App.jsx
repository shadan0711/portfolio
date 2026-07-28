import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Journal from "./components/Journal/Journal";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Bookshelf from "./components/Bookshelf/Bookshelf";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
       <Bookshelf />
        <Journal />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;