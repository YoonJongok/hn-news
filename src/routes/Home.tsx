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
    <>
      <Content style={{ height: "100%", padding: "3.2rem" }}>
        <div>
          {!isLoading &&
            data &&
            data.hits?.length > 0 &&
            data.hits.map((news) => {
              if (news.title !== null) {
                return <Article news={news} />;
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
    </>
  );
};

// const { Content, Footer } = Layout;

// export const Home = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [articlePerPage] = useState(20);
//   // const { data, isLoading, refetch } = useQuery<IArticle>(
//   //   ["articleData", currentPage],
//   //   () => fetchArticlesByPage(currentPage)
//   // );

//   const [articles, setArticles] = useState<IArticlesData[]>([]);
//   const [loading, setLoading] = useState(true);

//   let totalArticles: number;
//   useEffect(() => {
//     (async () => {
//       const response = await fetch(
//         `https://hn.algolia.com/api/v1/search?page=${currentPage}`
//       );
//       const json: IArticle = await response.json();
//       console.log(json);
//       setArticles(json.hits);

//       console.log("articles: ", articles);
//       setLoading(false);
//     })();
//   }, []);

//   //Catch up updated frist and the last Article indexes for pagination
//   const indexOfLastArticles = currentPage * articlePerPage;
//   const indexOfFirstArticles = indexOfLastArticles - articlePerPage;
//   // const currentArticles = data?.hits.slice(
//   //   indexOfFirstArticles,
//   //   indexOfLastArticles
//   // ) as IArticlesData[];

//   //Count totalArticles for total page numbers
//   // const totalArticles: number = (data?.nbPages as number) * 20;

//   const paginate = (pageNum: number) => setCurrentPage(pageNum);

//   // ID(=> objectID), author, number of points, title.
//   return (
//     <>
//       <Content style={{ height: "100%", padding: "3.2rem" }}>
//         {/* {!isLoading && data && (
//           <Pagination
//             articlePerPage={articlePerPage}
//             totalArticles={totalArticles}
//             paginate={paginate}
//           />
//         )} */}
//         {!loading && articles && (
//           <Pagination
//             articlePerPage={articlePerPage}
//             totalArticles={1000}
//             paginate={paginate}
//           />
//         )}
//       </Content>
//     </>
//   );
// };
