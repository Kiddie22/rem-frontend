import { useState } from 'react';
import * as yup from 'yup';
import { Alert, LinearProgress } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import FormComponents from '../layout/form-components';
import {
  LoginProps,
  LoginValues,
  SetSubmitting,
  extractResponse,
} from '@/utils/form-utils';

const initialLoginValues = {
  username: '',
  password: '',
};

const loginSchema = yup.object({
  username: yup.mixed().required('Required'),
  password: yup.string().required('Required'),
});

function LoginForm(props: LoginProps): JSX.Element {
  const { login } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (
    values: LoginValues,
    { setSubmitting }: SetSubmitting,
  ): Promise<void> => {
    const { username, password } = values;
    const responseMessage = await login(username, password);
    if (responseMessage) {
      const response = extractResponse(responseMessage);
      setErrorMessage(response);
    }
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
