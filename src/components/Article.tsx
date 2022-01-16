import React, { useState } from "react";
import { IArticlesData } from "../services/api";

interface IArticleProps {
  news: IArticlesData;
}
function Article({ news }: IArticleProps) {
  const [isLiked, setIsLied] = useState(false);
  const toggleLikedBtn = () => setIsLied(!isLiked);

  return (
    <article key={news.objectID}>
      <div>
        <p>{news.author}</p>
        <h3>{news.title}</h3>
        <p>{news.points}</p>
      </div>
      <button onClick={toggleLikedBtn}>{isLiked ? "Unlike" : "Like"}</button>
    </article>
  );
}

export default Article;
