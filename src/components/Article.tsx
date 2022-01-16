import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IArticlesData } from "../services/api";
import { LikedArticleState, TOKEN } from "../services/atoms";

interface IArticleProps {
  objectID?: string;
  author?: string;
  title?: string;
  points?: number;
}
function Article({ objectID, author, title, points }: IArticleProps) {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const setLikedArticles = useSetRecoilState(LikedArticleState);
  const handleToggleLikeBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLiked) {
      // setLikedArtic111qw aes) => {
      //   localStorage.setItem(TOKEN, JSON.stringify([...oldLikedArticles,]));
      // });;
    } else {
      // localStorage.removeItem()
    }

    setIsLiked(!isLiked);
  };

  return (
    <article key={objectID} style={{ marginBottom: "20px" }}>
      <div style={{ display: "inline-block" }}>
        <h2>{title}</h2>
        {pathname === "/" ? (
          <span style={{ display: "none" }}></span>
        ) : (
          <button onClick={handleToggleLikeBtn}>
            {isLiked ? <LikeFilled /> : <LikeOutlined />}
          </button>
        )}
      </div>
      <p>author: {author}</p>
      <p>points: {points}</p>
    </article>
  );
}

export default Article;
