import * as React from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Alert, LinearProgress } from '@mui/material';
import {
  CustomForm,
  CustomTextField,
  CustomSubmitButton,
  CustomSignUpFooter,
} from '../layout/form-components';

// Type Declarations
type SignUpFunction = (
  username: string,
  email: string,
  password: string,
) => Promise<string>;

type Values = {
  username: string;
  email: string;
  password: string;
};

const initialSignUpValues = {
  username: '',
  email: '',
  password: '',
};

const signUpSchema = yup.object({
  username: yup.mixed().required('Required'),
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
});

function SignUpForm(props: { signUp: SignUpFunction }): JSX.Element {
  const { signUp } = props;
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleFormSubmit = async (
    values: Values,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): Promise<void> => {
    const { username, email, password } = values;
    const responseMessage = await signUp(username, email, password);
    setSubmitting(false);
    if (responseMessage) {
      setErrorMessage(responseMessage);
    }
  };

  return (
    <Formik
      initialValues={initialSignUpValues}
      onSubmit={handleFormSubmit}
      validationSchema={signUpSchema}
    >
      {({ submitForm, isSubmitting }): JSX.Element => (
        <CustomForm title="Sign Up">
          <Form>
            <Field
              component={CustomTextField}
              name="username"
              type="text"
              label="Username"
            />
            <Field
              component={CustomTextField}
              name="email"
              type="email"
              label="Email"
            />
            <Field
              component={CustomTextField}
              name="password"
              type="password"
              label="Password"
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {isSubmitting && <LinearProgress />}
            <CustomSubmitButton
              isSubmitting={isSubmitting}
              submitForm={submitForm}
            >
              Sign Up
            </CustomSubmitButton>
            <CustomSignUpFooter />
          </Form>
        </CustomForm>
      )}
    </Formik>
  );
}

export default SignUpForm;
