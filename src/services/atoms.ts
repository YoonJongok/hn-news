import { atom } from "recoil";
import { IArticleProps, IArticlesData } from "./api";

export const TOKEN = "LikedArticle";

export const LikedArticleState = atom<IArticleProps[]>({
  key: "likedArticleState",
  default: [],
});
