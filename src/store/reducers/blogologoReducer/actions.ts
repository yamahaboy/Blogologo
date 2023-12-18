import { Dispatch } from "react";
import { AnyAction, AtriclesProps } from "../../../models/BlogologoProps";
import { BlogReducerEnum } from "./actionTypes";
import { getAtricles } from "../../../api/services/BlogologoServices/BlogologoServices";

export const setAtricles = (articles: AtriclesProps[]) => {
  console.log(articles, "action");
  return { type: BlogReducerEnum.SET_ARTICLES, payload: articles };
};

export const setCountOfArticles = (countOfArticles: number) => {
  console.log(countOfArticles, "SET_COUNT_OF_ARTICLES");
  return {
    type: BlogReducerEnum.SET_COUNT_OF_ARTICLES,
    payload: countOfArticles,
  };
};

export const setCurrentPage = (page: number) => {
  return {
    type: BlogReducerEnum.SET_CURRENT_PAGE,
    payload: page,
  };
};

export const getArticlesToStore = (page: number = 1) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const [dataArticles] = await Promise.all([getAtricles(page)]);
    const { count, results } = dataArticles;
    dispatch(setAtricles(results));
    dispatch(setCountOfArticles(count));
    dispatch(setCurrentPage(page));
  };
};
