import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, Chip, Button } from '@mui/material';
import { useRouter } from 'next/router';
import useAuthData from '@/hooks/useAuthData';
import FormComponents from './form-components';
import useAuthApi from '@/hooks/useAuthApi';
import instance from '@/api/axios-instance';

function Navbar(): JSX.Element {
  const router = useRouter();
  const setAuth = useAuthApi();
  const { user } = useAuthData();

  const logout = async (): Promise<void> => {
    await instance.get('auth/logout');
    setAuth({});
    router.push('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FormComponents.CustomLink href="/" label="REM" />
            {user?.role === 'owner' && (
              <FormComponents.CustomLink
                href="/properties"
                label="My Properties"
              />
            )}
            {user?.role === 'tenant' && (
              <FormComponents.CustomLink href="/tenant" label="Tenant" />
            )}
          </Typography>

          {user?.role === 'owner' && <Chip label="OWNER" color="success" />}
          {user?.role === 'tenant' && <Chip label="TENANT" color="error" />}

          {user?.username ? (
            <>
              <Chip label={`Welcome ${user.username}`} />
              <Button onClick={logout} variant="contained" color="info">
                Logout
              </Button>
            </>
          ) : (
            <>
              <FormComponents.CustomLink href="/login" label="Login" />
              <FormComponents.CustomLink href="/signup" label=" Sign Up" />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
