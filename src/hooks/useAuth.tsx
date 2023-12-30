import md5 from "md5";
import {
  LabelProps,
  SignInProps,
  SignUpProps,
  UserProps,
} from "../models/authProps";
import { useAppDispatch } from "../store/store";
import {
  setNameSurname,
  setSingUp,
} from "../store/reducers/authReducer/actions";

type AuthMethodsReturnType = {
  isSuccess: boolean;
  error?: string;
};

const useAuth = () => {
  const authUsers: SignUpProps[] = JSON.parse(
    localStorage.getItem("allUsers") || "[]"
  );
  const dispatch = useAppDispatch();

  const signUp = (data: SignUpProps): AuthMethodsReturnType => {
    const dataHash: UserProps = {
      id: md5(data.password).concat(Date.now().toString()),
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: md5(data.password),
    };

    if (authUsers.find((userHash) => userHash.email === dataHash.email)) {
      return {
        isSuccess: false,
        error: "* Account with this Email already exist",
      };
    }
    localStorage.setItem("allUsers", JSON.stringify([...authUsers, dataHash]));
    return { isSuccess: true };
  };

  const signIn = (data: SignInProps): AuthMethodsReturnType => {
    const foundUserFromStorage = authUsers.find(
      (user): user is UserProps => user.email === data.email
    );

    if (foundUserFromStorage !== undefined) {
      if (md5(data.password) === foundUserFromStorage.password) {
        const userData: UserProps = {
          id: foundUserFromStorage.id,
          name: foundUserFromStorage.name,
          surname: foundUserFromStorage.surname,
          email: data.email,
          password: md5(data.password),
        };
        dispatch(setSingUp(userData));
        const userLabel: LabelProps = {
          name: userData.name,
          surname: userData.surname,
        };
        dispatch(setNameSurname(userLabel));
        return { isSuccess: true };
      } else {
        return { isSuccess: false, error: "* Password isn't correct" };
      }
    }
    return {
      isSuccess: false,
      error: "* Account with this Email already exist",
    };
  };
  return { signIn, signUp };
};

export default useAuth;
