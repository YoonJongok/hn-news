import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Article from "../components/Article";
import { Container } from "../components/Container";
import Loader from "../components/Loader";
import { IArticleProps } from "../services/api";
import { LikedArticleState, TOKEN } from "../services/atoms";
interface IMyArticle {}

function MyArticle({}: IMyArticle) {
  const [loading, setLoading] = useState(true);
  const [likedArticles, setLikedArticles] = useRecoilState(LikedArticleState);
  useEffect(() => {
    const json = localStorage.getItem(TOKEN);
    if (json) {
      //Retrieve the data from localStorage and set it to the recoil state for initial data.
      const result: IArticleProps[] = JSON.parse(json);
      setLikedArticles(() => [...result]);
      setLoading(false);
    }
  }, [setLikedArticles]);
  return (
    <Container>
      {loading && <Loader />}
      {!loading && likedArticles.length > 0 ? (
        likedArticles.map((article) => (
          <Article
            key={article.objectID}
            objectID={article.objectID}
            title={article.title}
            author={article.author}
            points={article.points}
          />
        ))
      ) : (
        <div>No Liked Articles.</div>
      )}
    </Container>
  );
}
export default MyArticle;
