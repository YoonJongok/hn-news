import { atom } from "recoil";
import { IArticlesData } from "./api";

export const TOKEN = "LikedArticle";

// export interface ILikedArticleState {
//   [key: string]: IArticlesData[];
// }

export const LikedArticleState = atom<IArticlesData[]>({
  key: "likedArticleState",
  default: [],
});
