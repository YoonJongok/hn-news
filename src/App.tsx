import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyArticle from "./routes/MyArticle";
import Articles from "./routes/Articles";
import ArticleDetail from "./routes/ArticleDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/:id" element={<ArticleDetail />} />
        <Route path="/my-article" element={<MyArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
