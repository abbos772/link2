import { useState } from "react";
import "./App.css";
import Home from "../src/components/pages/main/Main";
import About from "../src/components/pages/about/About";
import Login from "../src/components/pages/login/Login";
import Careers from "../src/components/pages/careers/Careers";
import Blog from "../src/components/pages/Blog/Blog";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
