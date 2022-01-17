import React, { useEffect } from "react";
import { PageHeader } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchArticleDetail } from "../services/api";
import Article from "../components/Article";
import { Container } from "../components/Container";
import Loader from "../components/Loader";
import Comment from "../components/Comment";
import Title from "antd/lib/typography/Title";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  max-width: 680px;
  margin: 0 auto 1.563em;
  padding: 0.2rem;
`;

interface IComment {
  id: number;
  created_at?: string;
  created_at_i?: number;
  type?: string;
  author?: string;
  title?: string;
  url?: string;
  text?: string;
  points?: string;
  parent_id?: number;
  story_id?: number;
  children?: [];
  options?: [];
}

interface IArticleDetail {
  id: number;
  created_at?: string;
  created_at_i?: number;
  type?: string;
  author?: string;
  title?: string;
  url?: string;
  text?: {};
  points?: number;
  parent_id?: {};
  story_id?: {};
  children?: IComment[];
  options?: {};
}

function ArticleDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const articleId = id as string;
  const { data, isLoading } = useQuery<IArticleDetail>(
    ["articleDetail", articleId],
    () => fetchArticleDetail(articleId)
  );
  useEffect(() => {}, [isLoading]);
  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && data && (
        <>
          <PageHeader
            style={{ padding: "0", marginBottom: "1rem" }}
            onBack={() => navigate(-1)}
            title={"Back"}
          />

          <Section>
            <Title style={{ paddingLeft: "0.1em", color: "#34495e" }} level={3}>
              Article
            </Title>
            <Article
              objectID={data.id + ""}
              author={data.author}
              points={data.points}
              title={data.title}
            />
          </Section>
          <Section>
            <Title style={{ paddingLeft: "0.1em", color: "#34495e" }} level={3}>
              Comment
            </Title>
            {data.children && data.children.length > 0 && (
              <div>
                {data.children.slice(0, 20).map((comment) => {
                  if (comment.author) {
                    return (
                      <Comment
                        key={comment.id}
                        author={comment.author}
                        text={comment.text}
                      />
                    );
                  }
                })}
              </div>
            )}
          </Section>
        </>
      )}
    </Container>
  );
}

export default ArticleDetail;
