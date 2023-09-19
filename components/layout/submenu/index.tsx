import { FC } from 'react';
import Link from 'next/link';

import { Box } from '../../../elements';

const Footer: FC = () => (
  <Box as="footer">
    <Link href="#">submenu</Link>
  </Box>
);

export default Footer;
