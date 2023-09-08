import Link from 'next/link';
import { FC, useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiSearch,
  FiX,
} from 'react-icons/fi';
import { v4 } from 'uuid';

import { data } from '../../api';
import { Layout } from '../../components';
import { RoutesEnum } from '../../constants/routes';
import colors from '../../design-system/common/primitive-colors';
import {
  Box,
  Button,
  Input,
  Modal,
  Table,
  Typography,
  Dropdown,
} from '../../elements';

const Request: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Menu');
  const espherical = [
    '-0.50',
    '-0.60',
    '-0.70',
    '0',
    '0.50',
    '0.60',
    '0.70',
    '0.80',
  ];
  const cylinder = ['-0.50', '-0.60', '-0.70'];
  const axis = ['0', '45', '90', '180', '270', '360'];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Layout pageTitle="Pedidos">
      <Box
        as="div"
        minWidth="100%"
        minHeight="100%"
        height="90vh"
        width="80vw"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="flex-start"
        padding="1rem"
      >
        <Typography padding="0.5rem">Pedidos</Typography>
        <Box as="div" width="100vw" padding="0.5rem">
          <Box
            bg="outline"
            border="none"
            outline="none"
            mr={['NONE', 'S']}
            color="textInverted"
            width="77%"
            backgroundColor="foreground"
            borderRadius="M"
            borderSize="1px"
            borderStyle="solid"
            borderColor="#E4E4E7"
            display="flex"
            flexWrap="nowrap"
            overflow="hidden"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box cursor="pointer" padding="0.5rem" paddingRight="0">
              <FiSearch size={24} />
            </Box>
            <Input
              p="L"
              type="text"
              border="none"
              borderRadius="M"
              outline="none"
              backgroundColor="transparent"
              width={500}
              placeholder="Procurar por pedidos..."
            />
          </Box>
          <Button
            p="L"
            type="button"
            effect="hover"
            display="flex"
            disabled=""
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            width={150}
            borderRadius="M"
            marginTop="M"
            marginBottom="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            minWidth={['100%', '10rem']}
            textTransform="uppercase"
            alignItems="center"
            onClick={() => setModalOpen(!isModalOpen)}
          >
            Novo pedido
            <FiPlus size={18} color="#FFF" />
          </Button>
        </Box>
        <Box as="div" width="80%" height="100%" padding="0.5rem">
          <Typography as="h2">Listagem de pedidos</Typography>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <Box
                as="div"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography as="h5" padding="0.5rem">
                  Novo pedido
                </Typography>
                <FiX size={20} color="#A1A1AA" onClick={closeModal} />
              </Box>
              <Box as="div" width="100%" padding="0.5rem" marginTop="2rem">
                <Box
                  as="form"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Typography padding="0.5rem">Olho direito</Typography>
                  <Box
                    as="div"
                    width="100vw"
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Dropdown options={espherical} onSelect={handleSelect} />
                    <Dropdown options={cylinder} onSelect={handleSelect} />
                    <Dropdown options={axis} onSelect={handleSelect} />
                  </Box>
                  <Typography padding="0.5rem">Olho esquerdo</Typography>
                  <Box
                    as="div"
                    width="100vw"
                    display="flex"
                    gap="1rem"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Dropdown options={espherical} onSelect={handleSelect} />
                    <Dropdown options={cylinder} onSelect={handleSelect} />
                    <Dropdown options={axis} onSelect={handleSelect} />
                  </Box>
                  <Box
                    as="div"
                    width="100vw"
                    display="flex"
                    gap="1rem"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
                      width={500}
                      margin="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Nome do paciente
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        bg="outline"
                        border="none"
                        outline="none"
                        borderRadius="M"
                        borderSize="1px"
                        borderStyle="solid"
                        borderColor="#E4E4E7"
                        marginLeft="0.5rem"
                        color="textInverted"
                        width={490}
                        backgroundColor="transparent"
                        placeholder="Lucas Mateus"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                    <Box
                      as="div"
                      width={500}
                      margin="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Tipo de lente
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        bg="outline"
                        border="none"
                        outline="none"
                        borderRadius="M"
                        borderSize="1px"
                        borderStyle="solid"
                        borderColor="#E4E4E7"
                        marginLeft="0.5rem"
                        color="textInverted"
                        width={490}
                        backgroundColor="transparent"
                        placeholder="Vidro"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    as="div"
                    width="100vw"
                    display="flex"
                    gap="1rem"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
                      width={500}
                      margin="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Referência de trabalho
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        bg="outline"
                        border="none"
                        outline="none"
                        borderRadius="M"
                        borderSize="1px"
                        borderStyle="solid"
                        borderColor="#E4E4E7"
                        marginLeft="0.5rem"
                        color="textInverted"
                        width={490}
                        backgroundColor="transparent"
                        placeholder="23SW34B"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                    <Box
                      as="div"
                      width={500}
                      margin="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Diâmetro da lente
                      </Typography>
                      <Input
                        p="L"
                        type="number"
                        bg="outline"
                        border="none"
                        outline="none"
                        borderRadius="M"
                        borderSize="1px"
                        borderStyle="solid"
                        borderColor="#E4E4E7"
                        marginLeft="0.5rem"
                        color="textInverted"
                        width={490}
                        backgroundColor="transparent"
                        placeholder="-0.50"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    as="div"
                    width="93%"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Button
                      p="L"
                      type="butto "
                      effect="hover"
                      display="flex"
                      disabled=""
                      variant="primary"
                      fontWeight="bold"
                      color="#FFF"
                      width={100}
                      borderRadius="M"
                      border="none"
                      bg="#4763E4"
                      marginLeft="1rem"
                      marginTop="2rem"
                      justifyContent="center"
                      minWidth={['100%', '10rem']}
                      textTransform="uppercase"
                      alignItems="center"
                    >
                      Prosseguir
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Modal>
          )}
        </Box>
        <Box
          as="div"
          padding="0.5rem"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box
            as="div"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box as="div" padding="0.5rem">
              <Typography as="p" color="#A1A1AA">
                100 pedidos
              </Typography>
            </Box>
            <Box as="div" padding="0.5rem">
              <Box
                as="div"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={30}
              >
                <Button
                  p="0.8rem"
                  type="button"
                  effect="hover"
                  display="flex"
                  outline="none"
                  width={10}
                  height={10}
                  variant="primary"
                  color="#27272A"
                  bg="transparent"
                  marginTop="M"
                  border="0.5px solid #E4E4E7"
                  marginBottom="M"
                  justifyContent="center"
                  textTransform="uppercase"
                  alignItems="center"
                  active={{
                    background: '#4763E4',
                    color: '#FFF',
                  }}
                >
                  <Typography>
                    <FiChevronLeft size={16} color="#27272A" />
                  </Typography>
                </Button>
                {[1, 2, 3, 4, 5, 6, , 7, 8, 9].map((pag, index) => {
                  return (
                    <Button
                      p="0.8rem"
                      type="button"
                      key={index}
                      effect="hover"
                      display="flex"
                      disabled=""
                      outline="none"
                      width={10}
                      height={10}
                      variant="primary"
                      color="#27272A"
                      bg="transparent"
                      marginTop="M"
                      border="0.5px solid #E4E4E7"
                      marginBottom="M"
                      justifyContent="center"
                      textTransform="uppercase"
                      alignItems="center"
                      active={{
                        background: '#4763E4',
                        color: '#FFF',
                      }}
                    >
                      {pag}
                    </Button>
                  );
                })}
                <Button
                  p="0.8rem"
                  type="button"
                  effect="hover"
                  display="flex"
                  disabled=""
                  width={10}
                  height={10}
                  variant="primary"
                  color="#27272A"
                  bg="transparent"
                  marginTop="M"
                  border="0.5px solid #E4E4E7"
                  marginBottom="M"
                  justifyContent="center"
                  textTransform="uppercase"
                  alignItems="center"
                  active={{
                    background: '#4763E4',
                    color: '#FFF',
                  }}
                >
                  <Typography>
                    <FiChevronRight size={16} color="#27272A" />
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Request;
