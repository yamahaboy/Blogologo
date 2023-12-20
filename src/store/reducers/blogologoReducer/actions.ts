import { Dispatch } from "react";
import { AnyAction, BlogProps } from "../../../models/BlogologoProps";
import { BlogReducerEnum } from "./actionTypes";
import {
  getAtricles,
  getNews,
} from "../../../api/services/BlogologoServices/BlogologoServices";

export const setAtricles = (articles: BlogProps[]) => {
  return { type: BlogReducerEnum.SET_ARTICLES, payload: articles };
};
export const setNews = (news: BlogProps[]) => {
  return { type: BlogReducerEnum.SET_NEWS, payload: news };
};

export const setPaginationData = (count: number, currentPage: number) => {
  return {
    type: BlogReducerEnum.SET_PAGINATION_DATA,
    payload: { count, currentPage },
  };
};
export const setView = (view: string) => {
  return {
    type: BlogReducerEnum.SET_VIEW,
    payload: view,
  };
};

export const getArticlesToStore = (page: number = 1) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const [dataArticles] = await Promise.all([getAtricles(page)]);
    const { count, results } = dataArticles;
    dispatch(setAtricles(results));
    dispatch(setPaginationData(count, page));
  };
};

export const getNewsToStore = (page: number = 1) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const [dataNews] = await Promise.all([getNews(page)]);
    const { count, results } = dataNews;
    dispatch(setNews(results));
    dispatch(setPaginationData(count, page));
  };
};
