import md5 from "md5";
import { SingIn, SingUp, User } from "../models/authProps";
import { useAppDispatch } from "../store/store";
import { setSingUp } from "../store/reducers/authReducer/actions";

type AuthMethodsReturnType = {
  isSuccess: boolean;
  error?: string;
};

const useAuth = () => {
  const authUsers: SingUp[] = JSON.parse(
    localStorage.getItem("allUsers") || "[]"
  );
  const dispatch = useAppDispatch();

  const signUp = (data: SingUp): AuthMethodsReturnType => {
    const dataHash: User = {
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

  const signIn = (data: SingIn): AuthMethodsReturnType => {
    const foundUserFromStorage = authUsers.find(
      (user): user is User => user.email === data.email
    );

    if (foundUserFromStorage !== undefined) {
      if (md5(data.password) === foundUserFromStorage.password) {
        const userData: User = {
          id: foundUserFromStorage.id,
          name: foundUserFromStorage.name,
          surname: foundUserFromStorage.surname,
          email: data.email,
          password: md5(data.password),
        };
        dispatch(setSingUp(userData));
        return { isSuccess: true };
      } else {
        return { isSuccess: false, error: "* Password isn't correct" };
      }
    }
    return {
      isSuccess: false,
      error: "*Account with this Email already exist",
    };
  };
  return { signIn, signUp };
};

export default useAuth;
