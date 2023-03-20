import React from 'react';
import Navbar from './navbar';
import { Fragment } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Layout = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Navbar />
        <main>{props.children}</main>
      </Fragment>
    </ThemeProvider>
  );
};

export default Layout;
