import Link from 'next/link';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FiX } from 'react-icons/fi';

import { logout } from '../../../api/auth';
import { menuLink } from '../../../constants';
import { useUser } from '../../../context/user';
import colors from '../../../design-system/light-theme/colors';
import { Box, Button, ModalMenu, Typography } from '../../../elements';
import LogoSVG from '../../svg/logo';
import MenuSVG from '../../svg/menu';

const Sidebar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
      <Box
        as="aside"
        height="100vh"
        width={['100vw', '100vw', '100vw', '20vw']}
        visibility={['hidden', 'visible']}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color={colors.foreground}
        bg={colors.secondary}
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
      <Box
        top="0"
        zIndex="1"
        height={['8%', '8%', '8%', '8%']}
        width={['100%', '100%', '100%', '100%']}
        position="absolute"
        alignItems="center"
        bg="white"
        display={['flex', 'flex', 'flex', 'none']}
        justifyContent="space-between"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <Box display="flex" alignItems="center" height="1.5rem">
          <LogoSVG height="1.5rem" width="7.5rem" />
        </Box>
        <Button
          p={['0.2rem', 'L']}
          type="button"
          effect="hover"
          variant="primary"
          borderRadius="M"
          border="none"
          bg="none"
        >
          {!isModalOpen ? (
            <MenuSVG
              height="1.5rem"
              width="2.5rem"
              onClick={() => setIsModalOpen(true)}
            />
          ) : (
            <Box onClick={() => setIsModalOpen(false)}>
              <FiX size={20} color="#1A1A1A" />
            </Box>
          )}
        </Button>
        {isModalOpen && (
          <ModalMenu>
            <Box as="ul" width="50vw" height="auto">
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
                          color: '#000',
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
          </ModalMenu>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
