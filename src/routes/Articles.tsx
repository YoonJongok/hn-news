import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { useQuery } from "react-query";
import { fetchArticlesByPage, IArticle } from "../services/api";
import Pagination from "../components/Pagination";
import Article from "../components/Article";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Skeleton } from "antd";

function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(10);
  const { data, isLoading, refetch } = useQuery<IArticle>(
    ["articleData", currentPage],
    () => fetchArticlesByPage(currentPage)
  );

  useEffect(() => {
    if (isLoading) {
      <Skeleton active />;
    }
    if (!isLoading && data) {
      refetch();
    }
  }, [isLoading, data, refetch]);

  //Count totalArticles for total page numbers
  const totalArticles: number = (data?.nbPages as number) * articlePerPage;

  const paginate = (pageNum: number) => setCurrentPage(pageNum);

  // ID(=> objectID), author, number of points, title.
  return (
    <Container>
      {isLoading && <Spin size="large" />}
      {!isLoading &&
        data &&
        data.hits?.length > 0 &&
        data.hits.map((news) => {
          if (news.title !== null) {
            return (
              <Link key={news.objectID} to={`/${news.objectID}`}>
                <Article
                  objectID={news.objectID}
                  author={news.author}
                  points={news.points}
                  title={news.title}
                />
              </Link>
            );
          }
        })}

      {!isLoading && data && (
        <Pagination
          articlePerPage={articlePerPage}
          totalArticles={totalArticles}
          paginate={paginate}
        />
      )}
    </Container>
  );
}
export default Articles;
