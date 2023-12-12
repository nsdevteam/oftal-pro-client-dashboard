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
      <Box
        height={['100%', '100%', '100%', '100%']}
        width={['100vw', '100vw', '100vw', '100vw']}
        display="flex"
        flexDirection="column"
      >
        <Box
          height={['100%', '100%', '100%', '100%']}
          width={['100vw', '100vw', '100vw', '100vw']}
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Sidebar />
          <Box
            height={['100vh', '100vh', '100vh', '100vh']}
            width={['100vw', '100vw', '100vw', '100vw']}
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
