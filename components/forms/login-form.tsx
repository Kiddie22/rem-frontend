import * as React from 'react';
import * as yup from 'yup';
import { Alert, LinearProgress } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import FormComponents from '../layout/form-components';

// Type Declarations
type LoginFunction = (username: string, password: string) => Promise<string>;
type Values = { username: string; password: string };

const initialLoginValues = {
  username: '',
  password: '',
};

const loginSchema = yup.object({
  username: yup.mixed().required('Required'),
  password: yup.string().required('Required'),
});

function LoginForm(props: { login: LoginFunction }): JSX.Element {
  const { login } = props;
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleFormSubmit = async (
    values: Values,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): Promise<void> => {
    const { username, password } = values;
    const responseMessage = await login(username, password);
    setSubmitting(false);
    if (responseMessage) {
      setErrorMessage(responseMessage);
    }
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
