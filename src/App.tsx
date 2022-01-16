import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import "./App.css";
import Header from "./components/Header";
import { Layout } from "antd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Header />
              <Home />
            </Layout>
          }
        />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
