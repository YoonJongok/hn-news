export interface IArticlesData {
  created_at?: string;
  title?: string;
  url?: string;
  author?: string;
  points?: number;
  story_text?: string;
  comment_text?: string;
  num_comments?: number;
  story_id?: string;
  story_title?: string;
  story_url?: string;
  parent_id?: string;
  created_at_i?: number;
  _tags?: string[];
  objectID?: string;
  _highlightResult?: {};
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

export interface IArticleProps {
  objectID?: string;
  author?: string;
  title?: string;
  points?: number;
}

const BASE_URL = "https://hn.algolia.com/api/v1";

export async function fetchArticlesByPage(pageNum: number) {
  console.log("This is pageNum: ", pageNum);
  return await fetch(`${BASE_URL}/search?page=${pageNum}&&hitsPerPage=10`).then(
    (response) => response.json()
  );
}

export async function fetchArticleDetail(id: string) {
  console.log("This is id: ", id);
  return await fetch(`${BASE_URL}/items/${id}`).then((response) =>
    response.json()
  );
}
