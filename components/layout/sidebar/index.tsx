import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FC } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { menuLink } from '../../../api';
import colors from '../../../design-system/light-theme/colors';
import { Box, Button, Typography } from '../../../elements';
import LogoSVG from '../../svg/logo';

type MenuId = number;
const Sidebar: FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuId | null>(null); // Use the MenuId type and allow null
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const handleShowDropDownMenu = (id: MenuId) => {
    setSelectedMenu(id);
    setIsDropDown(!isDropDown);
  };

  const router = useRouter();

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
            const { id, url, title, icon, submenu } = link;
            return (
              <Box as="div" display="flex" flexDirection="column" key={id}>
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
                    <Button
                      variant="primary"
                      type="button"
                      borderRadius="M"
                      border="none"
                      bg="transparent"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      onClick={() => handleShowDropDownMenu(id)}
                    >
                      {selectedMenu === id && isDropDown ? (
                        <FiChevronDown size={18} color="#FFF" />
                      ) : (
                        <FiChevronUp size={18} color="#FFF" />
                      )}
                    </Button>
                  </Typography>
                </Box>
                <Typography as="ul">
                  <Typography as="li">
                    {selectedMenu === id && isDropDown && (
                      <Link href="#" className="dropDownLink">
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
            onClick={() => router.push('/')}
          >
            Terminar a sessão
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
