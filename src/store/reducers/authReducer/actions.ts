import { SingIn, SingUp } from "../../../models/authProps";
import { AuthReducerEnum } from "./actionTypes";

export const setSingUp = (users: SingUp[]) => {
  try {
    const existingData = localStorage.getItem("singUpData");

    const existingUsers = existingData ? JSON.parse(existingData) : [];

    const updatedUsers = [...existingUsers, ...users];

    localStorage.setItem("singUpData", JSON.stringify(updatedUsers));
  } catch (error) {
    console.error("error", error);
  }

  return {
    type: AuthReducerEnum.SING_UP,
    payload: users,
  };
};

export const setSingIn = (user: SingIn) => {
  return {
    type: AuthReducerEnum.SING_IN,
    payload: user,
  };
};
