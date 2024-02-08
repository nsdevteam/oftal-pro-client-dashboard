import { FC, useState } from 'react';
import { FiBell, FiX } from 'react-icons/fi';

import { notification } from '../../../constants';
import colors from '../../../design-system/light-theme/colors';
import { Box, ModalNotification, Typography } from '../../../elements';
import { LogoSVG, MenuSVG } from '../../svg';
import { HeaderProps } from '../layout.types';

const Header: FC<HeaderProps> = ({ setOpenMenu }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  return (
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
          <FiBell size={30} color="#000" onClick={openModal} />
          {isModalOpen ? (
            <ModalNotification isOpen={openModal} onClose={closeModal}>
              <Box
                as="div"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography as="h3">Notificações</Typography>
                <FiX size={20} color="#A1A1AA" onClick={closeModal} />
              </Box>
              {notification.map(
                ({ id, title, description, createdAt, currentDate }) => (
                  <Box
                    as="div"
                    key={id}
                    border="1px solid #E4E4E7"
                    borderRadius="0.5rem"
                    padding="0.3rem"
                    marginTop="0.5rem"
                    nActive={{
                      background: '#F2F2F2',
                      border: 'none',
                    }}
                  >
                    <Typography as="h5" padding="0.2rem">
                      {title}
                    </Typography>
                    <Typography
                      as="p"
                      padding="0.2rem"
                      fontSize="10pt"
                      color="#A1A1AA"
                    >
                      {description}
                    </Typography>
                    <Box
                      as="div"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography as="p" fontSize="8pt" padding="0.2rem">
                        {createdAt}
                      </Typography>
                      <Typography as="p" fontSize="8pt" padding="0.2rem">
                        {currentDate}
                      </Typography>
                    </Box>
                  </Box>
                )
              )}
            </ModalNotification>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
