import { FC, useState } from 'react';

import { Box, Typography } from '../../../elements';
import { FiChevronRight, FiBell } from 'react-icons/fi';
import Modal from '../../../elements/modal';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Typography as="span" padding="0.5rem">
          <FiBell
            size={30}
            color="#000"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
          {isModalOpen ? (
            <Modal background="#c2c2c2">
              <Typography>Notificações</Typography>
            </Modal>
          ) : (
            ''
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
