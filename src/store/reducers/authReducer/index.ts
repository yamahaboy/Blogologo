import { Reducer } from "redux";
import { AuthReducerEnum } from "./actionTypes";
import { AnyAction } from "../../../models/BlogologoProps";
import { Label, SingIn, SingUp } from "../../../models/authProps";

type AuthReducerType = {
  singUp: SingUp[];
  singIn: SingIn | null;
  user: Label | null;
};

const defaulState: AuthReducerType = {
  singUp: [],
  singIn: null,
  user: null,
};

const authReducer: Reducer<AuthReducerType, AnyAction> = (
  state = defaulState,
  action
) => {
  switch (action.type) {
    case AuthReducerEnum.SING_UP:
      return { ...state, singUp: action.payload };
    case AuthReducerEnum.SING_IN:
      return { ...state, singIn: action.payload };
    case AuthReducerEnum.SET_NAME_SURNAME:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
