import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;