import React, { useEffect, useState } from "react";
import { Layout, Skeleton, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchArticleDetail } from "../services/api";

import Article from "../components/Article";
import { Container } from "../components/Container";

const { Content } = Layout;

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
  const { id } = useParams();
  const articleId = id as string;
  const { data, isLoading } = useQuery<IArticleDetail>(
    ["articleDetail", articleId],
    () => fetchArticleDetail(articleId)
  );
  useEffect(() => {}, [isLoading]);

  return (
    <Container>
      {isLoading && <Spin size="large" />}
      {!isLoading && data && (
        <div>
          <section style={{ marginBottom: "120px" }}>
            <Article
              objectID={data.id + ""}
              author={data.author}
              points={data.points}
              title={data.title}
            />
          </section>
          <section>
            <h2>Comment</h2>
            {data.children && data.children.length > 0 && (
              <div>
                {data.children.slice(0, 20).map((comment) => (
                  <div key={comment.id}>
                    <p>Commenter: {comment.author}</p>
                    <p style={{ marginBottom: "50px" }}>
                      {comment?.text
                        ? comment.text
                            .replace(/(<([^>]+)>)/gi, "")
                            .replace(/[^\w\s]/gi, "")
                        : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </Container>
  );
}

export default ArticleDetail;
