import * as yup from 'yup';

export const initialSignUpValues = {
  username: '',
  email: '',
  password: '',
};

export const signUpSchema = yup.object({
  username: yup.mixed().required('Required'),
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
});

export type ReturnType = Promise<string | string[] | null>;

export type SignUpFunction = (
  username: string,
  email: string,
  password: string,
) => Promise<ReturnType>;

export type SignUpValues = {
  username: string;
  email: string;
  password: string;
};
