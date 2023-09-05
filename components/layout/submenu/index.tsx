import { FC } from 'react';
import Link from 'next/link';

import { Box, Typography } from '../../../elements';

const Footer: FC = ({ key, submenu }) => (
  <Box as="footer">
    <Link href="#">submenu</Link>
  </Box>
);

export default Footer;
