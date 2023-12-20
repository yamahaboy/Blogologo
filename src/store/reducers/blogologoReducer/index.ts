import { Reducer } from "redux";
import { AnyAction, BlogProps } from "../../../models/BlogologoProps";
import { BlogReducerEnum } from "./actionTypes";

type BlogologoReducerType = {
  articles: BlogProps[];
  news: BlogProps[];
  count: number;
  currentPage: number;
  view: string;
};

const defaulState: BlogologoReducerType = {
  articles: [],
  news: [],
  count: 1,
  currentPage: 1,
  view: "articles",
};

const blogologoReducer: Reducer<BlogologoReducerType, AnyAction> = (
  state = defaulState,
  action
) => {
  switch (action.type) {
    case BlogReducerEnum.SET_ARTICLES:
      return { ...state, articles: action.payload };
    case BlogReducerEnum.SET_NEWS:
      return { ...state, news: action.payload };
    case BlogReducerEnum.SET_PAGINATION_DATA:
      return {
        ...state,
        count: action.payload.count,
        currentPage: action.payload.currentPage,
      };
    case BlogReducerEnum.SET_VIEW:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};

export default blogologoReducer;
