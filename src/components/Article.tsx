import React, { useState } from "react";
import { IArticlesData } from "../services/api";
import { TOKEN } from "../services/atoms";

interface IArticleProps {
  news: IArticlesData;
}
function Article({ news }: IArticleProps) {
  const [isLiked, setIsLied] = useState(false);
  const toggleLikedBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLiked) {
      localStorage.setItem(TOKEN, JSON.stringify(news));
    } else {
      // localStorage.removeItem()
    }

    setIsLied(!isLiked);
  };

  return (
    <article key={news.objectID} style={{ marginBottom: "20px" }}>
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
