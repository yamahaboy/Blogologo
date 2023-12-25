import { Dispatch } from "react";
import { AnyAction, BlogProps } from "../../../models/BlogologoProps";
import { BlogReducerEnum } from "./actionTypes";
import {
  getPostById,
  getSearch,
  getValues,
} from "../../../api/services/BlogologoServices/BlogologoServices";

export const setArticles = (articles: BlogProps[]) => {
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

export const setSearchStringToStore = (
  newSearch: string,
  searching: boolean
) => {
  return {
    type: BlogReducerEnum.SET_SEARCH,
    payload: { newSearch, searching },
  };
};

export const setSelectedCard = (card: BlogProps) => {
  return { type: BlogReducerEnum.SET_SELECTED_CARD, payload: card };
};
export const getDataToStore = (view: string, page: number = 1) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const [data] = await Promise.all([getValues(view, page)]);

      const { count, results } = data;

      if (view === "articles") {
        dispatch(setArticles(results));
      } else if (view === "blogs") {
        dispatch(setNews(results));
      }

      dispatch(setPaginationData(count, page));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const searchAndSetResults = (view: string, search: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const [data] = await Promise.all([getSearch(view, search)]);

      const { count, results } = data;

      if (view === "articles") {
        dispatch(setArticles(results));
      } else if (view === "blogs") {
        dispatch(setNews(results));
      }

      dispatch(setPaginationData(count, 1));
      dispatch(setSearchStringToStore(search, true));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const getSelectedPostFromStore = (view: string, id: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const [data] = await Promise.all([getPostById(view, id)]);

      dispatch(setSelectedCard(data));
    } catch (error) {
      console.log("Error", error);
    }
  };
};
