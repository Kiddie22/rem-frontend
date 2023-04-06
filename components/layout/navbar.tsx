import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, Chip } from '@mui/material';
import useAuthData from '@/hooks/useAuthData';
import FormComponents from './form-components';

function Navbar(): JSX.Element {
  const { user } = useAuthData();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FormComponents.CustomLink href="/" label="REM" />
          </Typography>

          {user?.username ? (
            <>
              <Chip label={`Welcome ${user.username}`} />
              <FormComponents.CustomLink href="/logout" label="Logout" />
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
