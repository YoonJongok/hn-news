import React, { useEffect, useState } from "react";
import { Pagination, Spin } from "antd";
import { useQuery } from "react-query";
import { fetchArticlesByPage, IArticle } from "../services/api";
import Article from "../components/Article";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Skeleton } from "antd";
import Loader from "../components/Loader";
import styled from "styled-components";

const PageContainer = styled.div`
  margin: 0 auto;
`;

function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(10);
  const { data, isLoading, refetch } = useQuery<IArticle>(
    ["articleData", currentPage],
    () => fetchArticlesByPage(currentPage)
  );

  useEffect(() => {
    if (!isLoading && data) {
      refetch();
    }
  }, [isLoading, data, refetch]);

  //Count totalArticles for total page numbers
  const totalArticles: number =
    ((data?.nbPages as number) - 1) * articlePerPage;

  const paginate = (pageNum: number) => setCurrentPage(pageNum);

  return (
    <Container>
      {isLoading && <Loader />}
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
        <PageContainer>
          <Pagination
            defaultCurrent={1}
            pageSize={articlePerPage}
            current={currentPage}
            total={totalArticles}
            showSizeChanger={false}
            onChange={paginate}
          />
        </PageContainer>
      )}
    </Container>
  );
}
export default Articles;
