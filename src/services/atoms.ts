import { atom } from "recoil";
import { IArticlesData } from "./api";

export const TOKEN = "LikedArticle";

export const LikedArticleState = atom<IArticlesData[]>({
  key: "likedArticleState",
  default: [],
});
