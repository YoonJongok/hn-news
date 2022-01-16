import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyArticle } from "./routes/MyArticle";
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
        <Route path="my-article" element={<MyArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
