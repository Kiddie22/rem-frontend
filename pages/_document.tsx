import { Html, Head, Main, NextScript } from 'next/document';

function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Real Estate Management App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
