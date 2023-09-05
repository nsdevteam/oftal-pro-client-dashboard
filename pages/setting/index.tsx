import Link from 'next/link';
import { FC } from 'react';

import { Layout } from '../../components';
import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Button, Input, Typography } from '../../elements';

const Setting: FC = () => (
  <Layout pageTitle="Oftal Pro">
    <Box
      as="div"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Typography padding="0.5rem">Setting page</Typography>
    </Box>
  </Layout>
);

export default Setting;
