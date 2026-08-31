import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;