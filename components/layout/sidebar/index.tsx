import { logout } from 'burnbase/auth';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { menuLink } from '../../../constants';
import { useUser } from '../../../context/user';
import colors from '../../../design-system/light-theme/colors';
import { Box, Button, Typography } from '../../../elements';
import LogoSVG from '../../svg/logo';

const Sidebar: FC = () => {
  const { handleSubmit } = useForm();
  const { userData, forceVerifyLogin } = useUser();

  const signOut = async () => {
    await logout();
    forceVerifyLogin();
  };

  const handleLogout = () =>
    toast.promise(signOut(), {
      loading: 'Terminando a sessão...',
      success: 'Sessão terminada com sucesso',
      error: 'Error ao terminar sessão',
    });

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
          {menuLink.map(({ id, url, title, icon }) => (
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
          ))}
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
            onClick={handleSubmit(handleLogout)}
          >
            Terminar a sessão
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
