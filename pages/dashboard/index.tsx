import Link from 'next/link';
import { FC } from 'react';

import { Eye, EyeSlash } from '../../components/image-svg';
import Header from '../../components/layout/header';
import Sidebar from '../../components/layout/sidebar';
import { Loading } from '../../components/svg';
import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Button, Input, Typography } from '../../elements';
import { Layout } from '../components';

const Dashboard: FC = ({ children }) => {
  return (
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
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
