export interface IArticlesData {
  created_at: string | null;
  title: string | null;
  url: string | null;
  author: string | null;
  points: number | null;
  story_text: string | null;
  comment_text: string | null;
  num_comments: number | null;
  story_id: string | null;
  story_title: string | null;
  story_url: string | null;
  parent_id: string | null;
  created_at_i: number | null;
  _tags: string[] | null;
  objectID: string | null;
  _highlightResult: {} | null;
}
export interface IArticle {
  hits: IArticlesData[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  query: string;
  params: string;
  renderingContent: {};
  processingTimeMS: number;
}

// function sequance(n: number) {
//     let result = 0;
//  if(n === 1) {
//     result = n;
//  }else if(n >= 2) {
//      result
//  }
// }

const BASE_URL = "https://hn.algolia.com/api/v1/search";

export function fetchArticlesByPage(pageNum: number) {
  console.log("This is pageNum: ", pageNum);
  //   if (pageNum === 1) {
  //     return fetch(`${BASE_URL}?page=${pageNum}`).then((response) =>
  //       response.json()
  //     );
  //   }else if(pageNum % 2 === 0){
  //       continue;
  //   }else {
  //       const number =
  //   }

  return fetch(`${BASE_URL}?page=${pageNum}`).then((response) =>
    response.json()
  );
}
