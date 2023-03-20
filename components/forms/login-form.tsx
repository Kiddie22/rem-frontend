import * as React from 'react';
import { Alert, Box } from '@mui/material';
import {
  CustomForm,
  CustomLoginFooter,
  CustomSubmitButton,
  CustomTextField,
} from '../layout/form-components';

// Type Declarations
type LoginFunction = (username: string, password: string) => Promise<string>;
type Event = React.FormEvent<HTMLFormElement>;

function LoginForm(props: { login: LoginFunction }): JSX.Element {
  const { login } = props;
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const [username, password] = [data.get('username'), data.get('password')];
    const responseMessage = await login(String(username), String(password));
    if (responseMessage) {
      setErrorMessage(responseMessage);
    }
  };

  return (
    <CustomForm title="Log In">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <CustomTextField id="username" label="Username" />
        <CustomTextField id="password" label="Password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <CustomSubmitButton>Sign In</CustomSubmitButton>
        <CustomLoginFooter />
      </Box>
    </CustomForm>
  );
}

export default LoginForm;
