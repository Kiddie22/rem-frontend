import * as React from 'react';
import { Alert, Box } from '@mui/material';
import {
  CustomForm,
  CustomSignUpFooter,
  CustomSubmitButton,
  CustomTextField,
} from '../layout/form-components';

// Type Declarations
type SignUpFunction = (
  username: string,
  email: string,
  password: string,
) => Promise<string>;

type Event = React.FormEvent<HTMLFormElement>;

function SignUpForm(props: { signUp: SignUpFunction }): JSX.Element {
  const { signUp } = props;
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const [username, email, password] = [
      data.get('username'),
      data.get('email'),
      data.get('password'),
    ];
    const responseMessage = await signUp(
      String(username),
      String(email),
      String(password),
    );
    if (responseMessage) {
      setErrorMessage(responseMessage);
    }
  };

  return (
    <CustomForm title="Sign Up">
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <CustomTextField id="username" label="Username" type="text" />
        <CustomTextField id="email" label="Email Address" type="text" />
        <CustomTextField id="password" label="Password" type="password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <CustomSubmitButton>Sign Up</CustomSubmitButton>
        <CustomSignUpFooter />
      </Box>
    </CustomForm>
  );
}

export default SignUpForm;
