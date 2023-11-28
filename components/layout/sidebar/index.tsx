import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { menuLink } from '../../../api';
import colors from '../../../design-system/light-theme/colors';
import { Box, Button, Typography } from '../../../elements';
import { useFirebase } from '../../../hooks';
import LogoSVG from '../../svg/logo';

const Sidebar: FC = () => {
  const { handleSubmit } = useForm();
  const [userData, setUserData] = useState<any>();
  const { handleLogOut, getCurrentUserData } = useFirebase();

  useEffect(() => {
    getCurrentUserData().then(setUserData);
  }, []);

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
        <LogoSVG width={200} height={30} />
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
        <Box as="ul" width="100%">
          {menuLink.map((link) => {
            const { id, url, title, icon } = link;
            return (
              <Box
                as="div"
                display="flex"
                flexDirection="column"
                key={id}
                p="0.5rem"
              >
                <Box as="ul">
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
                  </Typography>
                </Box>
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
          <Typography padding="0.5rem">{userData?.fullName}</Typography>
          <Typography padding="0.5rem">{userData?.email}</Typography>
          <Button
            type="button"
            effect="hover"
            display="flex"
            justifyContent="center"
            alignItems="center"
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            borderRadius="M"
            border="none"
            padding="0.8rem"
            margin="0.5rem"
            minWidth="90%"
            bg="#DC2626"
            onClick={handleSubmit(handleLogOut)}
          >
            Terminar a sessão
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
