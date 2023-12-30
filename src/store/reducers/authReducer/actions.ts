import { LabelProps, SignInProps, SignUpProps } from "../../../models/authProps";
import { AuthReducerEnum } from "./actionTypes";

export const setSingUp = (users: SignUpProps) => {
  return {
    type: AuthReducerEnum.SING_UP,
    payload: users,
  };
};

export const setSingIn = (user: SignInProps) => {
  return {
    type: AuthReducerEnum.SING_IN,
    payload: user,
  };
};
export const setNameSurname = (user: LabelProps) => {
  return {
    type: AuthReducerEnum.SET_NAME_SURNAME,
    payload: user,
  };
};
