import { Reducer } from "redux";
import { AnyAction, AtriclesProps } from "../../../models/BlogologoProps";
import { BlogReducerEnum } from "./actionTypes";

type BlogologoReducerType = {
  atricles: AtriclesProps[];
  count: number;
  currentPage: number;
};

const defaulState: BlogologoReducerType = {
  atricles: [],
  count: 1,
  currentPage: 1,
};

const blogologoReducer: Reducer<BlogologoReducerType, AnyAction> = (
  state = defaulState,
  action
) => {
  switch (action.type) {
    case BlogReducerEnum.SET_ARTICLES:
      return { ...state, atricles: action.payload };
    case BlogReducerEnum.SET_COUNT_OF_ARTICLES:
      return { ...state, count: action.payload };
    case BlogReducerEnum.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default blogologoReducer;
