import { useState } from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Alert, LinearProgress, Typography } from '@mui/material';
import { Checkbox } from 'formik-mui';
import FormComponents from '../layout/form-components';
import {
  SignUpProps,
  SignUpValues,
  SetSubmitting,
  extractResponse,
} from '@/utils/form-utils';

const initialSignUpValues = {
  username: '',
  email: '',
  password: '',
  isOwner: false,
};

const signUpSchema = yup.object({
  username: yup.mixed().required('Required'),
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
});

function SignUpForm(props: SignUpProps): JSX.Element {
  const { signUp } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (
    values: SignUpValues,
    { setSubmitting }: SetSubmitting,
  ): Promise<void> => {
    const { username, email, password, isOwner } = values;
    const responseMessage = await signUp(username, email, password, isOwner);
    if (responseMessage) {
      const response = extractResponse(responseMessage);
      setErrorMessage(response);
    }
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
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <Field component={Checkbox} type="checkbox" name="isOwner" />
              <Typography>Owner</Typography>
            </span>
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
