import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import { useUser } from '../../context/user';
import { Box } from '../../elements';
import Header from './header';
import { LayoutProps } from './layout.types';
import Sidebar from './sidebar';

const Layout: FC<LayoutProps> = ({ pageTitle = '', children }) => {
  const { push } = useRouter();
  const { userAuth, loading } = useUser();
  const title = `${pageTitle} | Dashboard do cliente`;

  useEffect(() => {
    if (!userAuth && !loading) push('/');
  }, [userAuth, loading]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Box height="100vh" display="flex">
        <Sidebar />
        <Box
          width="100%"
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Header />
          <Box
            flex="1"
            p="2rem"
            as="main"
            display="flex"
            overflowY="auto"
            flexDirection="column"
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
