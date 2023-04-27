import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '@/components/layout/layout';
import PersistLogin from '@/components/PersistLogin';
import Providers from '@/context/Providers';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Providers>
      <PersistLogin>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </PersistLogin>
      <ReactQueryDevtools initialIsOpen={false} />
    </Providers>
  );
}

export default App;
