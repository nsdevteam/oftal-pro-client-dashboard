import { FC, useState } from 'react';
import { FiBell, FiChevronRight, FiX } from 'react-icons/fi';

import { notification } from '../../../api';
import { Box, ModalNotification, Typography } from '../../../elements';

const Header: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Box
      as="header"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
    >
      <Box as="div">
        <Typography
          as="span"
          padding="0.5rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#4658AC"
        >
          Inicio <FiChevronRight size={18} color="#A1A1AA" /> Pedido
        </Typography>
      </Box>
      <Box as="div">
        <Typography
          as="span"
          padding="0.5rem"
          borderRadius={25}
          display="flex"
          hover={{
            background: '#E5E5E5',
            transition: 'all 1s ease-out',
          }}
          justifyContent="center"
        >
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
              {notification.map((item) => {
                const { id, title, description, createdAt, currentDate } = item;
                return (
                  <Box
                    as="div"
                    key={id}
                    border="1px solid #E4E4E7"
                    borderRadius="0.5rem"
                    padding="0.3rem"
                    marginTop="0.5rem"
                    active={{
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
                );
              })}
            </ModalNotification>
          ) : (
            ''
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
