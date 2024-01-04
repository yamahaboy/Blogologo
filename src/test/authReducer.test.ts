import { LabelProps, SignInProps, SignUpProps } from "../models/authProps";
import { AuthReducerEnum } from "../store/reducers/authReducer/actionTypes";
import {
  setNameSurname,
  setSingIn,
  setSingUp,
} from "../store/reducers/authReducer/actions";

describe("Auth Actions", () => {
  describe("setSingUp", () => {
    it("should create an action to set sign up data", () => {
      const userData: SignUpProps = {
        email: "test@example.com",
        password: "testPassword123!",
        name: "John",
        surname: "Doe",
      };
      const expectedAction = {
        type: AuthReducerEnum.SING_UP,
        payload: userData,
      };
      expect(setSingUp(userData)).toEqual(expectedAction);
    });
  });

  describe("setSingIn", () => {
    it("should create an action to set sign in data", () => {
      const userData: SignInProps = {
        email: "test@example.com",
        password: "testPassword123!",
      };
      const expectedAction = {
        type: AuthReducerEnum.SING_IN,
        payload: userData,
      };
      expect(setSingIn(userData)).toEqual(expectedAction);
    });
  });

  describe("setNameSurname", () => {
    it("should create an action to set name and surname data", () => {
      const userData: LabelProps = {
        name: "John",
        surname: "Doe",
      };
      const expectedAction = {
        type: AuthReducerEnum.SET_NAME_SURNAME,
        payload: userData,
      };
      expect(setNameSurname(userData)).toEqual(expectedAction);
    });
  });
});
