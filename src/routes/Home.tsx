import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import { useQuery } from "react-query";
import { fetchArticlesByPage, IArticle, IArticlesData } from "../services/api";
import Pagination from "../components/Pagination";
import Article from "../components/Article";

const { Content, Footer } = Layout;

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(10);
  const { data, isLoading } = useQuery<IArticle>(
    ["articles", currentPage],
    () => fetchArticlesByPage(currentPage)
  );

  if (!isLoading && data) {
    console.log("Start");
    data.hits.map((val) => console.log("This is: ", val));
    console.log("end, ", data.hits.length);
  }

  //Catch up updated frist and the last Article indexes for pagination
  const indexOfLastArticles = currentPage * articlePerPage;
  const indexOfFirstArticles = indexOfLastArticles - articlePerPage;
  const currentArticles = data?.hits.slice(
    indexOfFirstArticles,
    indexOfLastArticles
  ) as IArticlesData[];

  //Count totalArticles for total page numbers
  const totalArticles: number = (data?.nbPages as number) * 20;

  const paginate = (pageNum: number) => setCurrentPage(pageNum);

  // ID(=> objectID), author, number of points, title.

  return (
    <>
      <Content style={{ height: "100%", padding: "3.2rem" }}>
        {!isLoading &&
          data &&
          currentArticles &&
          currentArticles.map((news) => <Article news={news} />)}
        {!isLoading && data && (
          <Pagination
            articlePerPage={articlePerPage}
            totalArticles={totalArticles}
            paginate={paginate}
          />
        )}
      </Content>
    </>
  );
};
