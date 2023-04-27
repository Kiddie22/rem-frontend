import { useState } from 'react';
import { Alert, LinearProgress } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { AuthContextDataType } from '@/utils/auth-utils';
import FormComponents from '../layout/form-components';
import useAuthApi from '@/hooks/useAuthApi';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import { SetSubmitting, extractResponse } from '@/utils/form-utils';
import {
  LoginValuesType,
  initialLoginValues,
  loginSchema,
} from '@/utils/login-utils';

function LoginForm(): JSX.Element {
  const router = useRouter();
  const instance = useAxiosInstance();
  const setAuth = useAuthApi();
  const [errorMessage, setErrorMessage] = useState('');

  const userLogin = async (values: {
    username: string;
    password: string;
  }): Promise<AuthContextDataType> => {
    const response = await instance.post('/auth/login', {
      username: values.username,
      password: values.password,
    });
    return response.data;
  };

  const userLoginMutation = useMutation({
    mutationFn: (values: LoginValuesType) => userLogin(values),
    onSuccess: ({ user, accessToken }) => {
      setAuth({ user, accessToken });
      router.push('/');
    },
    onError: (err: string) => {
      const response = extractResponse(err);
      setErrorMessage(response);
    },
  });

  const handleFormSubmit = async (
    values: LoginValuesType,
    { setSubmitting }: SetSubmitting,
  ): Promise<void> => {
    setSubmitting(true);
    userLoginMutation.mutateAsync(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialLoginValues}
      onSubmit={handleFormSubmit}
      validationSchema={loginSchema}
    >
      {({ submitForm, isSubmitting }): JSX.Element => (
        <FormComponents.CustomForm title="Log In">
          <Form>
            <Field
              component={FormComponents.CustomTextField}
              name="username"
              type="text"
              label="Username"
            />
            <Field
              component={FormComponents.CustomTextField}
              name="password"
              type="password"
              label="Password"
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {isSubmitting && <LinearProgress />}
            <FormComponents.CustomSubmitButton
              isSubmitting={isSubmitting}
              submitForm={submitForm}
            >
              Sign In
            </FormComponents.CustomSubmitButton>
            <FormComponents.CustomLoginFooter />
          </Form>
        </FormComponents.CustomForm>
      )}
    </Formik>
  );
}

export default LoginForm;
