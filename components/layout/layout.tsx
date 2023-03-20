import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './navbar';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function Layout(props: { children: ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
}

export default Layout;
