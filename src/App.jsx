import { useApp } from "./context/AppContext";
import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";
import './styles/main.scss';

function App() {
  const { theme } = useApp();
  return (
    <div className={theme}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
