import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import { AuthProvider } from '@/context/AuthProvider';
import PersistLogin from '@/components/PersistLogin';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <PersistLogin>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </PersistLogin>
    </AuthProvider>
  );
}

export default App;
