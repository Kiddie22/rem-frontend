import { ReactNode } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';

export function CustomForm(props: {
  title: string;
  children: ReactNode;
}): JSX.Element {
  const { title, children } = props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
}

export function CustomTextField(props: {
  id: string;
  label: string;
}): JSX.Element {
  const { id, label } = props;
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={id}
      autoComplete={id}
      autoFocus
    />
  );
}

export function CustomSubmitButton(props: {
  children: ReactNode;
}): JSX.Element {
  const { children } = props;
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 3 }}>
      {children}
    </Button>
  );
}

export function CustomSignUpFooter(): JSX.Element {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Link href="/login" variant="body2">
          Already have an account? Log in
        </Link>
      </Grid>
    </Grid>
  );
}

export function CustomLoginFooter(): JSX.Element {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="/" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="/signup" variant="body2">
          Don&apos;t have an account? Sign Up
        </Link>
      </Grid>
    </Grid>
  );
}
