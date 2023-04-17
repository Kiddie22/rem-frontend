export type ReturnType = Promise<string | string[] | null>;

export type LoginFunction = (
  username: string,
  password: string,
) => Promise<ReturnType>;

export type LoginValues = { username: string; password: string };

export type LoginProps = { login: LoginFunction };

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

export type SignUpProps = { signUp: SignUpFunction };

export type SetSubmitting = { setSubmitting: (isSubmitting: boolean) => void };

export function extractResponse(responseMessage: string | string[]): string {
  if (Array.isArray(responseMessage)) {
    return responseMessage[0];
  }
  return responseMessage;
}
