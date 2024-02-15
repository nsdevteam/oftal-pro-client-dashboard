import { FC } from 'react';

import colors from '../../../design-system/light-theme/colors';
import { Box } from '../../../elements';
import { LogoSVG, MenuSVG } from '../../svg';
import { HeaderProps } from '../layout.types';

const Header: FC<HeaderProps> = ({ setOpenMenu }) => (
  <Box
    px="1rem"
    as="header"
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    <Box
      cursor="pointer"
      display={['block', 'block', 'none']}
      onClick={() => setOpenMenu((v) => !v)}
    >
      <MenuSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%%" />
    </Box>
    <Box
      py="2rem"
      height={35}
      display="inline-flex"
      alignItems="center"
      background={colors.foreground}
    >
      <LogoSVG width={200} height={30} />
    </Box>
    <Box>
      <Box
        padding="0.5rem"
        borderRadius={25}
        display="flex"
        nHover={{
          background: '#E5E5E5',
          transition: 'all 1s ease-out',
        }}
        justifyContent="center"
      >
        <Box
          as="span"
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={20}
          width={20}
          fontSize={12}
          ml={15}
          mt={-7}
          borderRadius="100%"
          bg="#f00"
          color="#fff"
        >
          9
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Header;
