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
