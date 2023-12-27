import { Label, SingIn, SingUp } from "../../../models/authProps";
import { AuthReducerEnum } from "./actionTypes";

export const setSingUp = (users: SingUp) => {
  console.log(users, "users");
  return {
    type: AuthReducerEnum.SING_UP,
    payload: users,
  };
};

export const setSingIn = (user: SingIn) => {
  console.log(user, "user");
  return {
    type: AuthReducerEnum.SING_IN,
    payload: user,
  };
};
export const setNameSurname = (user: Label) => {
  console.log(user, "Label");
  return {
    type: AuthReducerEnum.SET_NAME_SURNAME,
    payload: user,
  };
};
