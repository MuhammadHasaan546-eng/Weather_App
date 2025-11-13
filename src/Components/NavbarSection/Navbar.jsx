import WeatherApp from "../HearoSection/WeatherApp";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <nav className="fixed top-0 left-0 w-full bg-indigo-600 text-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-2xl font-bold">WeatherApp &#127757;</div>

          <div className="hidden md:flex gap-6 text-lg">
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/weatherapp"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Weather
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-indigo-600 flex flex-col gap-4 px-4 pb-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/weatherapp"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Weather
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </Link>
          </div>
        )}
      </nav>

      <div className="pt-20 max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weatherapp" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
