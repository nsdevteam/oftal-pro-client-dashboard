import { Head, Html, Main, NextScript } from 'next/document';
import { ReactNode } from 'react';

const Document = (): ReactNode => (
  <Html lang="pt">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="no" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="oftalpro.com" />
      <meta name="msapplication-TileColor" content="#131219" />
      <meta
        name="description"
        content="Oftal pro encomendas de lentes personalizadas."
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="Oftal pro encomendas de lentes personalizadas."
      />
      <meta name="author" content="Oftal Pro" />
      <meta
        property="og:title"
        content="Oftal pro encomendas de lentes personalizadas."
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Oftal Pro" />
      <meta property="og:url" content="https://oftalpro.com" />
      <meta
        property="og:description"
        content="Oftal Pro encomendas de lentes personalizadas"
      />
      <link rel="icon" type="image/ico" href="./favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
