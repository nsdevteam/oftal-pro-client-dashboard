import Head from 'next/head';
import { FC } from 'react';

import { Box } from '../../elements';
import Header from './header';
import { LayoutProps } from './layout.types';
import Sidebar from './sidebar';

const Layout: FC<LayoutProps> = ({ pageTitle = '', children }) => {
  const title = `${pageTitle} | Dashboard do cliente`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Box
          as="div"
          height="100vh"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="center"
        >
          <Sidebar />
          <Box
            as="div"
            height="100vh"
            width="100vw"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Header />
            <Box as="main">{children}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
