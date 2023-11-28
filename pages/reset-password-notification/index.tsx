import { FC } from 'react';

import { Box, Typography } from '../../elements';

const ResetPasswordPage: FC = () => (
  <Box
    as="div"
    height="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    alignContent="center"
  >
    <Typography padding="0.5rem" borderLeft="3px solid #16A34A">
      Correio de verificação de endereço de e-mail, contendo o link de alteração
      de senha.
    </Typography>
  </Box>
);

export default ResetPasswordPage;
