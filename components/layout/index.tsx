import Head from 'next/head';
import { FC } from 'react';

import { Box } from '../../elements';
import { LayoutProps } from './layout.types';

const Layout: FC<LayoutProps> = ({ pageTitle = '', children }) => {
  const title = `${pageTitle} | Dashboard do cliente`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        {children}
      </Box>
    </>
  );
};

export default Layout;
