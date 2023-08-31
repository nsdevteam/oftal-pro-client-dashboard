import Link from 'next/link';
import { FC } from 'react';

import { Layout } from '../../components';
import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Typography, Button, Input } from '../../elements';

const ResetPassword: FC = () => (
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
      <Typography
        padding="0.5rem"
        borderLeftSize="3px"
        borderLeftStyle="solid"
        borderLeftColor="#16A34A"
      >
        Correio de verificação de endereço de e-mail, contendo o link de
        alteração de senha.
      </Typography>
    </Box>
  </Layout>
);

export default ResetPassword;
