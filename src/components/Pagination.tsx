import React from "react";

interface PaginationProps {
  articlePerPage: number;
  totalArticles: number;
  paginate: (pageNum: number) => void;
}
function Pagination({
  articlePerPage,
  totalArticles,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalArticles / articlePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((pageNum) => (
          <li key={pageNum}>
            <button onClick={() => paginate(pageNum)}>{pageNum}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
