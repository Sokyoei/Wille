import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Image from "@/pages/Image";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        hello world
        </a>
        </header> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="image" element={<Image />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
