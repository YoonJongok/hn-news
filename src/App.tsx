import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
