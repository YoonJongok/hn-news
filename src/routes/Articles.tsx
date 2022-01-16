import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import { useQuery } from "react-query";
import { fetchArticlesByPage, IArticle, IArticlesData } from "../services/api";
import Pagination from "../components/Pagination";
import Article from "../components/Article";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";

const { Content, Footer } = Layout;

function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(10);
  const { data, isLoading, refetch } = useQuery<IArticle>(
    ["articleData", currentPage],
    () => fetchArticlesByPage(currentPage)
  );
  console.log(data?.hits.length);
  console.log("data?.nbPages", data?.nbPages);

  useEffect(() => {
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
      <Content style={{ height: "100%", padding: "3.2rem" }}>
        <div>
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
        </div>
        {!isLoading && data && (
          <Pagination
            articlePerPage={articlePerPage}
            totalArticles={totalArticles}
            paginate={paginate}
          />
        )}
      </Content>
    </Container>
  );
}
export default Articles;
