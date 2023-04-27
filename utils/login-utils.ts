import * as yup from 'yup';

export const initialLoginValues = {
  username: '',
  password: '',
};

export const loginSchema = yup.object({
  username: yup.mixed().required('Required'),
  password: yup.string().required('Required'),
});

export type LoginValuesType = { username: string; password: string };

export type ReturnType = Promise<string | string[] | null>;

export type LoginFunction = (
  username: string,
  password: string,
) => Promise<ReturnType>;
