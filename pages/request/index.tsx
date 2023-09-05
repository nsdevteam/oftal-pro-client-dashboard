import { FC } from 'react';

import { Box, Typography } from '../../elements';

const Request: FC = () => (
  <Box
    as="div"
    height="100%"
    width="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Typography as="p">Listagem de pedido</Typography>
  </Box>
);

export default Request;
