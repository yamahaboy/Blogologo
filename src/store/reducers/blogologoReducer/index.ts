import { Reducer } from "redux";
import { AnyAction, BlogProps } from "../../../models/BlogologoProps";
import { BlogReducerEnum } from "./actionTypes";

type BlogologoReducerType = {
  articles: BlogProps[];
  news: BlogProps[];
  count: number;
  currentPage: number;
  view: string;
  newSearch: string;
  date: string;
  searching: boolean;
  searchingDate: boolean;
  selectedCard: BlogProps | null;
  dateInterval: string;
};

const defaulState: BlogologoReducerType = {
  articles: [],
  news: [],
  count: 1,
  currentPage: 1,
  view: "articles",
  newSearch: "",
  date: "",
  searching: false,
  searchingDate: false,
  selectedCard: null,
  dateInterval: "",
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

    case BlogReducerEnum.SET_SEARCH:
      return {
        ...state,
        newSearch: action.payload.newSearch,
        searching: action.payload.searching,
      };
    case BlogReducerEnum.SET_SEARCH_DATE:
      return {
        ...state,
        date: action.payload.date,
        searchingDate: action.payload.searchingDate,
      };
    case BlogReducerEnum.SET_SELECTED_CARD:
      return { ...state, selectedCard: action.payload };
    case BlogReducerEnum.SET_DATE_INTERVAL:
      return { ...state, dateInterval: action.payload };
    default:
      return state;
  }
};

export default blogologoReducer;
