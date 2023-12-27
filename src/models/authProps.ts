export type SingUp = {
  email: string;
  password: string;
  name: string;
  surname: string;
};

export type SingIn = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type Label = {
  name: string;
  surname: string;
};
