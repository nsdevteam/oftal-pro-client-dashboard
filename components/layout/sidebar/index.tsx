import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FC } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { menuLink } from '../../../api';
import colors from '../../../design-system/light-theme/colors';
import { Box, Button, Typography } from '../../../elements';
import LogoSVG from '../../svg/logo';
import { RoutePaths, RoutesEnum } from '../constants/routes';

const Sidebar: FC = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <Box
      as="aside"
      height="100vh"
      width="20%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      color={colors.foreground}
      background={colors.secondary}
    >
      <Box
        as="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={35}
        width="100%"
        background={colors.foreground}
        padding="2rem"
      >
        <LogoSVG width={200} height={30} alt="Aftal pro logo" />
      </Box>
      <Box
        as="div"
        height="100%"
        width="100%"
        padding="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box as="ul" listStyle="none" width="100%">
          {menuLink.map((link) => {
            const { id, url, title, icon, submenu } = link;
            return (
              <Box as="div" display="flex" flexDirection="column" key={id}>
                <Typography
                  as="li"
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link
                    href={url}
                    style={{
                      color: '#FFF',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {icon}
                    {title}
                  </Link>
                  <Button
                    type="button"
                    disabled=""
                    variant="primary"
                    borderRadius="M"
                    border="none"
                    bg="transparent"
                    display="flex"
                    justifyContent="center"
                    textTransform="uppercase"
                    alignItems="center"
                    onClick={() => setIsDropDown(!isDropDown)}
                  >
                    {isDropDown ? (
                      <FiChevronDown size={18} color="#FFF" />
                    ) : (
                      <FiChevronUp size={18} color="#FFF" />
                    )}
                  </Button>
                </Typography>
                <Typography as="ul" listStyle="none">
                  <Typography as="li">
                    {isDropDown && (
                      <Link
                        href="#"
                        style={{
                          padding: '0.5rem',
                          margin: '0.5rem',
                          marginLeft: '2rem',
                          width: '80%',
                          borderRadius: '10px',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          color: '#FFF',
                          '&:active': {
                            backgroundColor: '#4256D0',
                          },
                        }}
                      >
                        {submenu}
                      </Link>
                    )}
                  </Typography>
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          as="ul"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding="0.5rem"
          alignItems="flex-start"
        >
          <Typography padding="0.5rem">Mario Batalha</Typography>
          <Typography padding="0.5rem">mariobatalha@gmail.com</Typography>
          <Button
            type="submit"
            effect="hover"
            display="flex"
            disabled=""
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            borderRadius="M"
            border="none"
            padding="0.8rem"
            margin="0.5rem"
            minWidth="90%"
            bg="#DC2626"
            justifyContent="center"
            textTransform="uppercase"
            alignItems="center"
          >
            Terminar a sessão
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
