import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Search from "./components/Search";
import "./App.css";

const colorData = [
  { color: "red", value: "#f00" },
  { color: "green", value: "#0f0" },
  { color: "blue", value: "#00f" },
  { color: "cyan", value: "#0ff" },
  { color: "magenta", value: "#f0f" },
  { color: "yellow", value: "#ff0" },
  { color: "black", value: "#000" },
];

const App = () => {
  const [colors] = useState(colorData);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <About />
          <Services />
          <Routes>
            <Route path="/search" element={<Search colors={colors} />} />
          </Routes>
          <div className="search-button">
            <button
              className="button"
              onClick={() => (window.location.href = "/search")}
            >
              Search
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
