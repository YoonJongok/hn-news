import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import { useQuery } from "react-query";
import { fetchArticlesByPage, IArticle } from "../services/api";

const { Content, Footer } = Layout;

export const Home = () => {
  const { data, isLoading } = useQuery<IArticle>(["articles", 1], () =>
    fetchArticlesByPage(1)
  );
  if (!isLoading && data) {
    console.log(data.nbPages);
    data.hits.map((val) => console.log("This is: ", val));
  }

  return (
    <>
      <Content style={{ height: "74vh", padding: "3.2rem" }}>
        {/* {!isLoading &&
          articles.hits &&
          articles.hits.map((article) => (
            <div key={article.title}>{article.title}</div>
          ))} */}
      </Content>
      <Footer style={{ height: "20vh", backgroundColor: "black" }}>
        This is footer
      </Footer>
    </>
  );
};
