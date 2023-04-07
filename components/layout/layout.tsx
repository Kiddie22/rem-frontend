import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Roboto } from 'next/font/google';
import Navbar from './navbar';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

function Layout(props: { children: ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <CssBaseline />
        <main className={roboto.className}>{children}</main>
      </>
    </ThemeProvider>
  );
}

export default Layout;
