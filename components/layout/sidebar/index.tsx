import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { v4 } from 'uuid';

import { MENU_ITEMS } from '../../../constants';
import { useUser } from '../../../context/user';
import colors from '../../../design-system/light-theme/colors';
import { Box, Button, Typography } from '../../../elements';
import { SidebarProps } from '../layout.types';
import { logout } from '../../../utils/helpers';
import { useRouter } from 'next/router';

const Sidebar: FC<SidebarProps> = ({ isOpenMenu }) => {
  const { handleSubmit } = useForm();
  const { userData, forceVerifyLogin } = useUser();
  const router = useRouter();

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
      top="4rem"
      bottom="0"
      flexDirection="column"
      alignItems="flex-start"
      color={colors.foreground}
      justifyContent="space-between"
      background={colors.secondary}
      width={['100vw', '100vw', '17rem']}
      position={['fixed', 'fixed', 'static']}
      display={[
        isOpenMenu ? 'flex' : 'none',
        isOpenMenu ? 'flex' : 'none',
        'flex',
      ]}
      className='dash-sidebar'
    >
      <Box as="ul" width="100%" className='list'>
        {MENU_ITEMS.map(({ url, title, icon }) => (
          <Box
            as="div"
            display="flex"
            flexDirection="column"
            key={v4()}
            p="0.5rem"
            className={`listItem ${url === router.pathname ? 'listItemActive' : ''}`}
            onClick={()=>router.push(url)}   
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
        padding="0.5rem"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        className='auth-info'
      >
        <Typography className='auth-info-user' padding="0.5rem">{userData?.fullName}</Typography>
        <Typography className='auth-info-email' padding="0.5rem">{userData?.email}</Typography>
        <Button
          className='auth-info-logout-btn'
          bg="#DC2626"
          width="calc(100% - 2rem)"
          onClick={handleSubmit(handleLogout)}
        >
          Terminar a sessão
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
