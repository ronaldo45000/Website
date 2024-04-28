import "./App.css";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";

import { Contact } from "./Pages/Contact";
import { About2 } from "./Pages/About2";
import { Blog } from "./Pages/Blog";

function App() {
  return (
    <>
      <Router>
      <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about2" element={<About2 />} />

          </Routes>

        </div>
      </Router>
  </>
  );
}

export default App;