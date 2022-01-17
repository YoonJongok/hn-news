import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IArticleProps } from "../services/api";
import { LikedArticleState, TOKEN } from "../services/atoms";
import { Typography, Button } from "antd";
import Title from "antd/lib/typography/Title";

const { Text } = Typography;

export const SArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 680px;
  margin: 0 auto 1.563em;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.containerColor};
  overflow: auto;
`;

function Article({ objectID, author, title, points }: IArticleProps) {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const setLikedArticles = useSetRecoilState(LikedArticleState);

  useEffect(() => {
    const json = localStorage.getItem(TOKEN);
    if (json) {
      //Retrieve the data from localStorage and set it to the recoil state for initial data.
      const result = JSON.parse(json);
      setLikedArticles(() => [...result]);
      //Check whether this article is liked or not and display the liked value according to the result.
      const isExist = JSON.parse(json).find(
        (val: IArticleProps) => val.objectID === objectID
      );
      if (!isExist) {
        setIsLiked(false);
      } else {
        setIsLiked(true);
      }
    }
  }, [objectID, setLikedArticles]);

  const handleToggleLikeBtn = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isLiked) {
        // when article is not liked
        setLikedArticles((oldLikedArticles) => {
          //create new liked article object
          const newLikeArticles: IArticleProps = {
            objectID,
            author,
            title,
            points,
          };

          //update the persistent likedArticles list in local storage and recoil state
          localStorage.setItem(
            TOKEN,
            JSON.stringify([...oldLikedArticles, newLikeArticles])
          );
          return [...oldLikedArticles, newLikeArticles];
        });
      } else {
        //When the ariticle is already liked
        setLikedArticles((oldLikedArticles) => {
          //remove the currentArticle from the original list in state management
          const filteredLikedArticles = oldLikedArticles.filter(
            (article) => article.objectID !== objectID
          );

          //update the newly updated(removed) list to the localstorage and recoil state
          localStorage.setItem(
            TOKEN,
            JSON.stringify([...filteredLikedArticles])
          );
          return [...filteredLikedArticles];
        });
      }
      //toggle the like status(like <-> unlike)
      setIsLiked(!isLiked);
    },
    [objectID, author, title, points, setLikedArticles, isLiked]
  );

  return (
    <SArticle key={objectID}>
      <Text style={{ color: "#34495e" }} strong>
        Author: <span style={{ color: "#2c3e50" }}>{author}</span>
      </Text>
      {pathname === "/" ? (
        <span style={{ display: "none" }}></span>
      ) : (
        <Button
          style={{
            position: "absolute",
            top: "0.2em",
            right: "0.2em",
            zIndex: "10",
            color: "red",
          }}
          type="text"
          icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
          size={"large"}
          onClick={handleToggleLikeBtn}
        />
      )}

      <Title style={{ marginTop: "0.2rem" }} level={4}>
        {title}
      </Title>

      <Text style={{ color: "#7f8c8d" }}>Points: {points}</Text>
    </SArticle>
  );
}

export default Article;
