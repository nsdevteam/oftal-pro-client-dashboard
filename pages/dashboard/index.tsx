import { FC } from 'react';

import Header from '../../components/layout/header';
import Sidebar from '../../components/layout/sidebar';
import { Box, Typography } from '../../elements';
import Layout from '../../components/Layout';

const Dashboard: FC = ({ children }) => {
  return (
    <Layout pageTitle="Dashboard">
      <Box
        as="div"
        height="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Typography as="h3">Bem-vindo Mário Batalha</Typography>
      </Box>
    </Layout>
  );
};

export default Dashboard;
