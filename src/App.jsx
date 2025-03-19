import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") === "light",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme);
    theme
      ? localStorage.setItem("theme", "light")
      : localStorage.removeItem("theme");
  }, [theme]);

  return (
    <div className="page-colors">
      <div className="mx-auto max-w-[50rem] px-10 font-display">
        <Nav setTheme={setTheme} theme={theme} />
        <Header />
        <main className="pb-6">
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
