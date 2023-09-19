import Image from 'next/image';
import { FC, useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiSearch,
  FiX,
} from 'react-icons/fi';

import { v4 as uuidv4 } from 'uuid';

import { address, indiceOfRefraction, geometry } from '../../api';
import { Layout } from '../../components';
import {
  Box,
  Button,
  Input,
  Modal,
  ModalAddress,
  Typography,
  Dropdown,
} from '../../elements';

import { Express, PaymentReference } from '../../components/image-svg';

const Request: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Menu');
  const [showSelectAddress, setShowSelectAddress] = useState(false);
  const [selected, setSelected] = useState(false);
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState(address);
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [apt, setApt] = useState('');
  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentByReference, setPaymentByReference] = useState(false);
  const [paymentByExpress, setPaymentByExpress] = useState(false);
  const [paymentSucceed, setPaymentSucceed] = useState(false);
  const id = uuidv4();

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

  const colors = ['Branco', 'Fotocromática', 'Transições', 'Polarizada'];

  const handleAddressSelected = (id) => {
    setSelected(id);
  };

  const handleSelectAddress = () => {
    setShowSelectAddress(!showSelectAddress);
    setModalOpen(false);
  };

  const handleAddNewAddress = () => {
    setAddNewAddress(!addNewAddress);
    setShowSelectAddress(false);
  };

  const handleUseAddress = () => {
    setShowSelectAddress(true);
    setAddNewAddress(false);

    const newLocation = address.push({
      id,
      province,
      city,
      street,
      apt,
    });

    setNewAddress(newLocation);
    setProvince('');
    setCity('');
    setStreet('');
    setApt('');
  };

  const handlePaymentModal = () => {
    setPaymentModal(false);
    setShowSelectAddress(false);
  };

  const handleCancel = () => {
    setShowSelectAddress(true);
    setAddNewAddress(false);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOpenPaymentModal = () => {
    setPaymentModal(true);
    setModalOpen(false);
    setShowSelectAddress(false);
    setPaymentByReference(true);
  };

  const handlePaymentByReference = () => {
    setPaymentByReference(true);
    setPaymentByExpress(false);
  };

  const handlePaymentByExpress = () => {
    setPaymentByExpress(true);
    setPaymentByReference(false);
  };

  const handleCancelPayment = () => {
    setPaymentModal(false);
  };

  const handlePaymentSucceed = () => {
    setPaymentSucceed(true);
    setPaymentModal(false);
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
                <Typography as="h4" padding="0.5rem">
                  Novo pedido
                </Typography>
                <FiX size={20} color="#A1A1AA" onClick={closeModal} />
              </Box>
              <Box as="div" width="100%" padding="1rem">
                <Typography as="p" padding="0.5rem">
                  Refração
                </Typography>
                <Box
                  as="form"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Box
                    as="div"
                    width="auto"
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
                      width="auto"
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <Typography padding="0.5rem">Olho direito</Typography>
                      <Box
                        as="div"
                        display="flex"
                        flexDirection="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                      >
                        <Dropdown
                          options={espherical}
                          onSelect={handleSelect}
                        />
                        <Dropdown options={cylinder} onSelect={handleSelect} />
                        <Dropdown options={axis} onSelect={handleSelect} />
                      </Box>
                    </Box>
                    <Box
                      as="div"
                      width="auto"
                      display="flex"
                      flexDirection="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <Box
                        as="div"
                        width="auto"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        marginLeft="3rem"
                      >
                        <Typography padding="0.5rem">Tratamento</Typography>
                        <Box
                          as="div"
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          padding="0.5rem"
                        >
                          <Button
                            as="select"
                            name="value"
                            width={270}
                            height={50}
                            p="L"
                            bg="outline"
                            border="none"
                            outline="none"
                            borderRadius="M"
                            borderSize="1px"
                            borderStyle="solid"
                            borderColor="#E4E4E7"
                            color="textInverted"
                            backgroundColor="transparent"
                            focus={{
                              borderColor: '#4763E4',
                            }}
                          >
                            <Typography as="option" value="HMC">
                              HMC
                            </Typography>
                            <Typography
                              as="option"
                              padding="0.5rem"
                              value="HMC"
                            >
                              SHMC
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                      <Box
                        as="div"
                        width="auto"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                      >
                        <Typography padding="0.5rem">
                          Índice de refração
                        </Typography>
                        <Box
                          as="div"
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          padding="0.5rem"
                        >
                          <Button
                            as="select"
                            name="value"
                            width={270}
                            height={50}
                            p="L"
                            bg="outline"
                            border="none"
                            outline="none"
                            borderRadius="M"
                            borderSize="1px"
                            borderStyle="solid"
                            borderColor="#E4E4E7"
                            color="textInverted"
                            backgroundColor="transparent"
                            focus={{
                              borderColor: '#4763E4',
                            }}
                          >
                            {indiceOfRefraction.map((item) => {
                              const { id, value } = item;
                              return (
                                <Typography as="option" key={id} value={value}>
                                  {value}
                                </Typography>
                              );
                            })}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    as="div"
                    width="auto"
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
                      width="auto"
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <Typography padding="0.5rem">Olho direito</Typography>
                      <Box
                        as="div"
                        display="flex"
                        flexDirection="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                      >
                        <Dropdown
                          options={espherical}
                          onSelect={handleSelect}
                        />
                        <Dropdown options={cylinder} onSelect={handleSelect} />
                        <Dropdown options={axis} onSelect={handleSelect} />
                      </Box>
                    </Box>
                    <Box
                      as="div"
                      width="auto"
                      display="flex"
                      flexDirection="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <Box
                        as="div"
                        width="auto"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        marginLeft="3rem"
                      >
                        <Typography padding="0.5rem">Tipo/Cor</Typography>
                        <Box
                          as="div"
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          padding="0.5rem"
                        >
                          <Button
                            as="select"
                            name="value"
                            width={270}
                            height={50}
                            p="L"
                            bg="outline"
                            border="none"
                            outline="none"
                            borderRadius="M"
                            borderSize="1px"
                            borderStyle="solid"
                            borderColor="#E4E4E7"
                            color="textInverted"
                            backgroundColor="transparent"
                            focus={{
                              borderColor: '#4763E4',
                            }}
                          >
                            {colors.map((color) => {
                              return (
                                <Typography
                                  as="option"
                                  key={color}
                                  padding="0.5rem"
                                  value="HMC"
                                >
                                  {color}
                                </Typography>
                              );
                            })}
                          </Button>
                        </Box>
                      </Box>
                      <Box
                        as="div"
                        width="auto"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                      >
                        <Typography padding="0.5rem">
                          Geometria/Superfície
                        </Typography>
                        <Box
                          as="div"
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          padding="0.5rem"
                        >
                          <Button
                            as="select"
                            name="value"
                            width={270}
                            height={50}
                            p="L"
                            bg="outline"
                            border="none"
                            outline="none"
                            borderRadius="M"
                            borderSize="1px"
                            borderStyle="solid"
                            borderColor="#E4E4E7"
                            color="textInverted"
                            backgroundColor="transparent"
                            focus={{
                              borderColor: '#4763E4',
                            }}
                          >
                            {geometry.map((geo) => {
                              const { id, value } = geo;
                              return (
                                <Typography
                                  as="option"
                                  padding="0.5rem"
                                  key={id}
                                  value={value}
                                >
                                  {value}
                                </Typography>
                              );
                            })}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    as="div"
                    width="100vw"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
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
                        width={390}
                        backgroundColor="transparent"
                        placeholder="Lucas Mateus"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                    <Box
                      as="div"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      marginLeft="3.5rem"
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
                        width={560}
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
                        color="textInverted"
                        marginLeft="0.5rem"
                        width={390}
                        backgroundColor="transparent"
                        placeholder="23SW34B"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                    <Box
                      as="div"
                      marginLeft="3.5rem"
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
                        width={560}
                        backgroundColor="transparent"
                        placeholder="-0.50"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography padding="0.5rem">
                    Subtotal: 3.000.000,00 AOA
                  </Typography>
                  <Box
                    as="div"
                    width="95%"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Button
                      p="L"
                      type="button"
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
                      marginTop="1rem"
                      justifyContent="center"
                      minWidth={['100%', '10rem']}
                      textTransform="uppercase"
                      alignItems="center"
                      onClick={handleSelectAddress}
                    >
                      Prosseguir
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Modal>
          )}
          {showSelectAddress && (
            <ModalAddress
              isOpen={() => setShowSelectAddress(true)}
              onClose={() => setShowSelectAddress(false)}
            >
              <Box paddingLeft="3rem">
                <Box
                  as="div"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography as="h4" padding="0.5rem">
                    Seleciona o endereço de entrega
                  </Typography>
                  <FiX
                    size={20}
                    color="#A1A1AA"
                    onClick={() => setShowSelectAddress(false)}
                  />
                </Box>
                <Box as="div" marginTop={['S', 'XXL']}>
                  {address.map((addressItem) => {
                    const { id, province, city, street, apt } = addressItem;
                    return (
                      <Box
                        as="div"
                        key={id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className="address-list"
                        onClick={() => handleAddressSelected(id)}
                      >
                        <Box
                          as="div"
                          key={id}
                          display="flex"
                          justifyContent="flex-start"
                          alignItems="center"
                          as="div"
                          border="none"
                          outline="none"
                          effect="hover"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          padding={['S', 'XL']}
                          margin={['S', 'M']}
                          width="95%"
                          borderRadius="5px"
                          transition="0.5s"
                          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                          bg={selected === id ? '#F2F2F2' : 'transparent'}
                        >
                          <Box>
                            {province}, {city},{' '}
                            <Box as="span" color="#B0B0B0">
                              {' '}
                              {street}, {apt}
                            </Box>
                          </Box>
                          <Box
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            width="20px"
                            height="20px"
                            borderRadius="25px"
                            bg="transparent"
                            bg={selected === id ? '#4763E4' : 'transparent'}
                          />
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box
                  as="div"
                  width="95%"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Button
                    p="L"
                    type="button"
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
                    marginLeft="0.5rem"
                    marginTop="1rem"
                    justifyContent="center"
                    minWidth={['100%', '10rem']}
                    textTransform="uppercase"
                    alignItems="center"
                    onClick={handleOpenPaymentModal}
                  >
                    Prosseguir
                  </Button>
                  <Button
                    p="L"
                    type="button"
                    effect="hover"
                    display="flex"
                    disabled=""
                    variant="primary"
                    color="#4763E4"
                    width={250}
                    borderRadius="M"
                    border="none"
                    bg="transparent"
                    marginLeft="0.5rem"
                    marginTop="1rem"
                    justifyContent="center"
                    minWidth={['100%', '10rem']}
                    textTransform="uppercase"
                    alignItems="center"
                    onClick={handleAddNewAddress}
                  >
                    + Novo endereço de entrega
                  </Button>
                </Box>
              </Box>
            </ModalAddress>
          )}
          {addNewAddress && (
            <Modal
              isOpen={() => setAddNewAddress(true)}
              onClose={() => setAddNewAddress(false)}
            >
              <Box paddingLeft="1rem">
                <Box
                  as="div"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography as="h4" padding="0.5rem">
                    Novo endereço de entrega
                  </Typography>
                  <FiX
                    size={20}
                    color="#A1A1AA"
                    onClick={() => setAddNewAddress(false)}
                  />
                </Box>
                <Box
                  as="div"
                  width="100vw"
                  display="flex"
                  marginTop="2rem"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Box
                    as="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography textAlign="left" padding="0.5rem">
                      Província
                    </Typography>
                    <Input
                      p="L"
                      type="text"
                      value={province}
                      bg="outline"
                      border="none"
                      outline="none"
                      borderRadius="M"
                      borderSize="1px"
                      borderStyle="solid"
                      borderColor="#E4E4E7"
                      marginLeft="0.5rem"
                      color="textInverted"
                      width={390}
                      backgroundColor="transparent"
                      placeholder="Benguela"
                      onChange={(e) => setProvince(e.target.value)}
                      focus={{
                        borderColor: '#4763E4',
                      }}
                    />
                  </Box>
                  <Box
                    as="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    marginLeft="3.5rem"
                  >
                    <Typography textAlign="left" padding="0.5rem">
                      Município
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
                      width={560}
                      backgroundColor="transparent"
                      placeholder="Lobito"
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
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Box
                    as="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography textAlign="left" padding="0.5rem">
                      Bairro
                    </Typography>
                    <Input
                      p="L"
                      type="text"
                      value={city}
                      bg="outline"
                      border="none"
                      outline="none"
                      borderRadius="M"
                      borderSize="1px"
                      borderStyle="solid"
                      borderColor="#E4E4E7"
                      marginLeft="0.5rem"
                      color="textInverted"
                      width={1015}
                      backgroundColor="transparent"
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bairro da Camunda"
                      focus={{
                        borderColor: '#4763E4',
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  as="div"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography textAlign="left" padding="0.5rem">
                    Rua
                  </Typography>
                  <Input
                    p="L"
                    type="text"
                    value={street}
                    bg="outline"
                    border="none"
                    outline="none"
                    borderRadius="M"
                    borderSize="1px"
                    borderStyle="solid"
                    borderColor="#E4E4E7"
                    marginLeft="0.5rem"
                    color="textInverted"
                    width={1015}
                    backgroundColor="transparent"
                    placeholder="Rua das casas amarelas"
                    onChange={(e) => setStreet(e.target.value)}
                    focus={{
                      borderColor: '#4763E4',
                    }}
                  />
                </Box>
                <Box
                  as="div"
                  width="100vw"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Box
                    as="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography textAlign="left" padding="0.5rem">
                      Casa/Apartamento
                    </Typography>
                    <Input
                      p="L"
                      type="text"
                      bg="outline"
                      value={apt}
                      border="none"
                      outline="none"
                      borderRadius="M"
                      borderSize="1px"
                      borderStyle="solid"
                      borderColor="#E4E4E7"
                      marginLeft="0.5rem"
                      color="textInverted"
                      width={390}
                      backgroundColor="transparent"
                      onChange={(e) => setApt(e.target.value)}
                      placeholder="Casa S/N"
                      focus={{
                        borderColor: '#4763E4',
                      }}
                    />
                  </Box>
                  <Box
                    as="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    marginLeft="3.5rem"
                  >
                    <Typography textAlign="left" padding="0.5rem">
                      Edifício
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
                      width={560}
                      backgroundColor="transparent"
                      placeholder="Antiga sede da ENDE"
                      focus={{
                        borderColor: '#4763E4',
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  as="div"
                  width="95%"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  marginTop="2rem"
                >
                  <Button
                    p="L"
                    type="submit"
                    effect="hover"
                    display="flex"
                    disabled=""
                    variant="primary"
                    color="#000"
                    width={80}
                    borderRadius="M"
                    border="1px solid #E4E4E7"
                    bg="transparent"
                    marginLeft="0.5rem"
                    marginTop="1rem"
                    justifyContent="center"
                    minWidth={['100%', '10rem']}
                    textTransform="uppercase"
                    alignItems="center"
                    cursor="pointer"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                  <Button
                    p="L"
                    type="submit"
                    effect="hover"
                    display="flex"
                    disabled=""
                    variant="primary"
                    fontWeight="bold"
                    color="#FFF"
                    width={200}
                    borderRadius="M"
                    border="none"
                    bg="#4763E4"
                    marginLeft="0.5rem"
                    marginTop="1rem"
                    justifyContent="center"
                    minWidth={['100%', '10rem']}
                    textTransform="uppercase"
                    alignItems="center"
                    cursor="pointer"
                    onClick={handleUseAddress}
                  >
                    Usar este endereço
                  </Button>
                </Box>
              </Box>
            </Modal>
          )}
        </Box>
        {paymentModal && (
          <Modal
            isOpen={() => setPaymentModal(true)}
            onClose={handlePaymentModal}
          >
            <Box paddingLeft="1rem">
              <Box
                as="div"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography as="h4" padding="0.5rem">
                  Pagamento
                </Typography>
                <FiX size={20} color="#A1A1AA" onClick={handlePaymentModal} />
              </Box>
              <Box as="div" marginTop="2rem" padding="0.5rem">
                <Typography>Como deseja pagar?</Typography>
                <Box
                  as="div"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  marginTop="2rem"
                >
                  <Box
                    as="div"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    padding="1rem"
                    border="none"
                    outline="none"
                    borderRadius="M"
                    borderSize="1px"
                    borderStyle="solid"
                    borderColor={paymentByReference ? '#4763E4' : '#E4E4E7'}
                    width="500px"
                    height="80px"
                    backgroundColor="transparent"
                    name="paymentByReference"
                    onClick={handlePaymentByReference}
                  >
                    <Image
                      src="/reference-payment.svg"
                      height={50}
                      width={50}
                    />
                    <Typography>Pagamento por referência</Typography>
                  </Box>
                  <Box
                    as="div"
                    m="S"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    padding="1rem"
                    border="none"
                    outline="none"
                    borderRadius="M"
                    borderSize="1px"
                    borderStyle="solid"
                    borderColor={paymentByExpress ? '#4763E4' : '#E4E4E7'}
                    width="500px"
                    height="80px"
                    backgroundColor="transparent"
                    name="paymentByExpress"
                    onClick={handlePaymentByExpress}
                  >
                    <Image
                      src="/express.svg"
                      height={30}
                      width={30}
                      style={{ margin: '0.5rem' }}
                    />
                    <Typography>Multicaixa Express</Typography>
                  </Box>
                </Box>
              </Box>
              {paymentByReference && (
                <Box>
                  <Box
                    as="div"
                    width="100vw"
                    display="flex"
                    marginTop="2rem"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Entidade
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
                        width={390}
                        backgroundColor="transparent"
                        placeholder="491 Oftal Pro"
                        onChange={(e) => setProvince(e.target.value)}
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                    <Box
                      as="div"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      marginLeft="3.5rem"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Referência
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
                        width={560}
                        backgroundColor="transparent"
                        placeholder="001437785"
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
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Montante
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
                        width={1015}
                        backgroundColor="transparent"
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="1.000.000,00"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              )}
              {paymentByExpress && (
                <Box>
                  <Box
                    as="div"
                    width="100vw"
                    display="flex"
                    marginTop="2rem"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      as="div"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Número de telefone
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
                        width={390}
                        backgroundColor="transparent"
                        placeholder="923 009 161"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                    <Box
                      as="div"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      marginLeft="3.5rem"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Montante
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
                        width={560}
                        backgroundColor="transparent"
                        placeholder="3.000.000,00"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              )}
              <Box
                as="div"
                width="95%"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                marginTop="S"
              >
                <Button
                  p="L"
                  type="submit"
                  effect="hover"
                  display="flex"
                  disabled=""
                  variant="primary"
                  color="#000"
                  width={80}
                  borderRadius="M"
                  border="1px solid #E4E4E7"
                  bg="transparent"
                  marginLeft="0.5rem"
                  marginTop="1rem"
                  justifyContent="center"
                  minWidth={['100%', '10rem']}
                  textTransform="uppercase"
                  alignItems="center"
                  cursor="pointer"
                  onClick={handleCancelPayment}
                >
                  Cancelar
                </Button>
                <Button
                  p="L"
                  type="submit"
                  effect="hover"
                  display="flex"
                  disabled=""
                  variant="primary"
                  fontWeight="bold"
                  color="#FFF"
                  width={200}
                  borderRadius="M"
                  border="none"
                  bg="#4763E4"
                  marginLeft="0.5rem"
                  marginTop="1rem"
                  justifyContent="center"
                  minWidth={['100%', '10rem']}
                  textTransform="uppercase"
                  alignItems="center"
                  cursor="pointer"
                  onClick={handlePaymentSucceed}
                >
                  Concluír pagamento
                </Button>
              </Box>
            </Box>
          </Modal>
        )}
        {paymentSucceed && (
          <Modal
            isOpen={() => setAddNewAddress(true)}
            onClose={() => setAddNewAddress(false)}
          >
            <Box
              as="div"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography as="h4" padding="0.5rem"></Typography>
              <FiX
                size={20}
                color="#A1A1AA"
                onClick={() => setPaymentSucceed(false)}
              />
            </Box>
            <Box
              as="div"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography as="h4">Obrigado pela sua compra.</Typography>
              <Typography color="#BBBBBB">
                O seu pedido está aguardando o processamento do pagamento, serás
                notificado por mensagem e na plataforma brevemente.
              </Typography>
            </Box>
          </Modal>
        )}
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
