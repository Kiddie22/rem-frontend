import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Alert, LinearProgress } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import FormComponents from '../layout/form-components';
import { AuthContextDataType } from '@/utils/auth-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import useAuthApi from '@/hooks/useAuthApi';
import { SetSubmitting, extractResponse } from '@/utils/form-utils';
import {
  SignUpValues,
  initialSignUpValues,
  signUpSchema,
} from '@/utils/signup-utils';

function SignUpForm(): JSX.Element {
  const router = useRouter();
  const instance = useAxiosInstance();
  const setAuth = useAuthApi();
  const [errorMessage, setErrorMessage] = useState('');

  const userSignUp = async (
    values: SignUpValues,
  ): Promise<AuthContextDataType> => {
    const response = await instance.post('/auth/signup', {
      username: values.username,
      email: values.email,
      password: values.password,
    });
    return response.data;
  };

  const userSignUpMutation = useMutation({
    mutationFn: (values: SignUpValues) => userSignUp(values),
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
    values: SignUpValues,
    { setSubmitting }: SetSubmitting,
  ): Promise<void> => {
    setSubmitting(true);
    userSignUpMutation.mutateAsync(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialSignUpValues}
      onSubmit={handleFormSubmit}
      validationSchema={signUpSchema}
    >
      {({ submitForm, isSubmitting }): JSX.Element => (
        <FormComponents.CustomForm title="Sign Up">
          <Form>
            <Field
              component={FormComponents.CustomTextField}
              name="username"
              type="text"
              label="Username"
            />
            <Field
              component={FormComponents.CustomTextField}
              name="email"
              type="email"
              label="Email"
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
              Sign Up
            </FormComponents.CustomSubmitButton>
            <FormComponents.CustomSignUpFooter />
          </Form>
        </FormComponents.CustomForm>
      )}
    </Formik>
  );
}

export default SignUpForm;
