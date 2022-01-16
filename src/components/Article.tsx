import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IArticleProps } from "../services/api";
import { LikedArticleState, TOKEN } from "../services/atoms";

function Article({ objectID, author, title, points }: IArticleProps) {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const setLikedArticles = useSetRecoilState(LikedArticleState);

  useEffect(() => {
    const json = localStorage.getItem(TOKEN);
    if (json) {
      const isExist = JSON.parse(json).find(
        (val: IArticleProps) => val.objectID === objectID
      );
      if (!isExist) {
        setIsLiked(false);
      } else {
        setIsLiked(true);
      }
    }
  }, [objectID]);

  const handleToggleLikeBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLiked) {
      setLikedArticles((oldLikedArticles) => {
        console.log("like OldLiked: ", oldLikedArticles);
        const newLikeArticles: IArticleProps = {
          objectID,
          author,
          title,
          points,
        };
        localStorage.setItem(
          TOKEN,
          JSON.stringify([...oldLikedArticles, newLikeArticles])
        );
        console.log("After like btn: ", [...oldLikedArticles, newLikeArticles]);
        return [...oldLikedArticles, newLikeArticles];
      });
    } else {
      setLikedArticles((oldLikedArticles) => {
        console.log("oldLikedArticles: ", oldLikedArticles);

        const filteredLikedArticles = oldLikedArticles.filter(
          (article) => article.objectID !== objectID
        );
        console.log("filteredLikedArticles: ", filteredLikedArticles);
        localStorage.setItem(TOKEN, JSON.stringify([...filteredLikedArticles]));
        console.log("After unlike btn: ", [...filteredLikedArticles]);

        return [...filteredLikedArticles];
      });
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
