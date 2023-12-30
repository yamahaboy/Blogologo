import { Label, SignIn, SignUp } from "../../../models/authProps";
import { AuthReducerEnum } from "./actionTypes";

export const setSingUp = (users: SignUp) => {
  return {
    type: AuthReducerEnum.SING_UP,
    payload: users,
  };
};

export const setSingIn = (user: SignIn) => {
  return {
    type: AuthReducerEnum.SING_IN,
    payload: user,
  };
};
export const setNameSurname = (user: Label) => {
  return {
    type: AuthReducerEnum.SET_NAME_SURNAME,
    payload: user,
  };
};
