import { Route, Routes, Navigate } from "react-router-dom";

// Layout
import MainLayout from "./Layout/MainLayout";

// Pages
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Certificates from "./Pages/Certificates/Certificates";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import NotFound from "./Pages/NotFound/NotFound";

// AOS
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// CSS Style
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      {/* Parent Layout */}
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificates" element={<Certificates />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
