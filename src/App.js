import Header from "./Components/Header/Header";
import Navbar from "./Components/Shared/Navbar/Navbar";
import ThemeToggle from "./Components/Shared/ThemeToggle/ThemeToggle";
import About from "./Components/About/About";
import Skills from "./Components/Skils/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
