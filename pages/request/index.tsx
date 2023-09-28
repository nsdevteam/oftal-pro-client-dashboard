import Image from 'next/image';
import { FC } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiSearch,
  FiX,
} from 'react-icons/fi';

import {
  address,
  colorData,
  geometryData,
  refractionData,
  requestData,
  treatmentData,
} from '../../api';
import { Layout } from '../../components';
import {
  Box,
  Button,
  Input,
  Modal,
  ModalAddress,
  Table,
  Typography,
} from '../../elements';
import { useFormInput } from '../../hooks';
const Request: FC = () => {
  const {
    register,
    handleSubmit,
    errors,

    isModalOpen,
    showSelectAddress,
    selected,
    addNewAddress,
    paymentModal,
    paymentByReference,
    paymentByExpress,
    paymentSucceed,
    selectLeftEye,
    selectRightEye,
    file,
    setModalOpen,
    setShowSelectAddress,
    setSelected,
    setAddNewAddress,
    setPaymentModal,
    setPaymentByReference,
    setPaymentSucceed,
    setPaymentByExpress,
    setSelectLeftEye,
    setSelectRightEye,
    setFile,
    onSubmit,
  } = useFormInput();

  const columns = [
    'Nome do paciente',
    'Geometria',
    'índice de refração',
    'Tratamento',
    'Quantidade',
    'Data de pedido',
    'Opções',
  ];

  const handleAddressSelected = (id: number | boolean | null) => {
    setSelected(id);
  };

  const handleOpenModalNewAddress = () => {
    setAddNewAddress(!addNewAddress);
    setShowSelectAddress(false);
  };

  const handleUseAddress = () => {
    setShowSelectAddress(true);
    setAddNewAddress(false);
  };

  const handlePaymentModal = () => {
    setPaymentModal(false);
    setShowSelectAddress(false);
  };

  const handleCancel = () => {
    setShowSelectAddress(true);
    setAddNewAddress(false);
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
    setPaymentByExpress(false);
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

  const handleToggleLeftEyeOption = () => {
    setSelectLeftEye(!selectLeftEye);
  };

  const handleToggleRightEyeOption = () => {
    setSelectRightEye(!selectRightEye);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile.name);
    }
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
        <Box as="form" width="100vw" padding="0.5rem">
          <Box
            bg="transparent"
            mr={['NONE', 'S']}
            color="textInverted"
            width="77%"
            borderRadius="M"
            border="1px solid #E4E4E7"
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
              mr={['NONE', 'S']}
              ml={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['30rem']}
              placeholder="Procurar por pedidos..."
              name="search"
            />
          </Box>
          <Button
            p="L"
            type="button"
            effect="hover"
            display="flex"
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            width={['10rem', 'NONE']}
            minWidth={['100%', '10rem']}
            borderRadius="M"
            marginTop="M"
            marginBottom="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            alignItems="center"
            onClick={() => setModalOpen(!isModalOpen)}
          >
            Novo pedido
            <FiPlus size={18} color="#FFF" />
          </Button>
        </Box>
        <Box as="div" width="80%" height="100%" padding="0.5rem">
          <Typography as="h2">Listagem de pedidos</Typography>
          <Table data={requestData} columns={columns} />
          {isModalOpen && (
            <Modal isOpen={openModal} onClose={closeModal}>
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
              <Box
                as="form"
                onSubmit={handleSubmit(onSubmit)}
                width="100%"
                padding="1rem"
              >
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
                      mt="0.5rem"
                    >
                      <Typography padding="0.5rem">Olho esquerdo</Typography>
                      <Box
                        as="div"
                        display="flex"
                        flexDirection="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                      >
                        <Box
                          as="div"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="3.5rem"
                        >
                          {selectLeftEye ? (
                            <Input
                              p="L"
                              type="checkbox"
                              outline="none"
                              checked
                              border="1px solid #E4E4E7"
                              borderRadius="L"
                              color="textInverted"
                              mr={['NONE', 'S']}
                              ml={['NONE', 'S']}
                              minWidth={['100%', '5rem']}
                              width={['5rem']}
                              bg="transparent"
                              focus={{
                                borderColor: '#4763E4',
                              }}
                              onClick={handleToggleLeftEyeOption}
                            />
                          ) : (
                            <Input
                              p="L"
                              type="checkbox"
                              outline="none"
                              border="1px solid #E4E4E7"
                              borderRadius="L"
                              color="textInverted"
                              mr={['NONE', 'S']}
                              ml={['NONE', 'S']}
                              minWidth={['100%', '5rem']}
                              width={['5rem']}
                              bg="transparent"
                              focus={{
                                borderColor: '#4763E4',
                              }}
                              onClick={handleToggleLeftEyeOption}
                            />
                          )}
                        </Box>
                        <Input
                          type="number"
                          p="L"
                          min="-35"
                          max="20"
                          outline="none"
                          border="1px solid #E4E4E7"
                          borderRadius="M"
                          color="textInverted"
                          mr={['NONE', 'S']}
                          ml={['NONE', 'S']}
                          minWidth={['100%', '6.1rem']}
                          width={['6.1rem']}
                          bg="transparent"
                          placeholder="Esf."
                          focus={{
                            borderColor: '#4763E4',
                          }}
                          {...register('leftSpherical', {
                            required: 'Campo obrigatório',
                            min: -6,
                            max: 7,
                          })}
                          disabled={!selectLeftEye}
                        />
                        {errors.leftSpherical && (
                          <Typography className="alertDanger">
                            {errors.leftSpherical.message}
                          </Typography>
                        )}
                        <Input
                          type="number"
                          p="L"
                          min="-6"
                          max="7"
                          outline="none"
                          border="1px solid #E4E4E7"
                          borderRadius="M"
                          color="textInverted"
                          mr={['NONE', 'S']}
                          ml={['NONE', 'S']}
                          minWidth={['100%', '6.1rem']}
                          width={['6.1rem']}
                          bg="transparent"
                          placeholder="Cil."
                          focus={{
                            borderColor: '#4763E4',
                          }}
                          {...register('leftCylinder', {
                            required: 'Campo obrigatório',
                            min: -6,
                            max: 7,
                          })}
                          disabled={!selectLeftEye}
                        />
                        {errors.leftCylinder && (
                          <Typography className="alertDanger">
                            {errors.leftCylinder.message}
                          </Typography>
                        )}
                        <Input
                          type="number"
                          p="L"
                          min="0"
                          max="180"
                          outline="none"
                          border="1px solid #E4E4E7"
                          borderRadius="M"
                          color="textInverted"
                          mr={['NONE', 'S']}
                          ml={['NONE', 'S']}
                          minWidth={['100%', '6.1rem']}
                          width={['6.1rem']}
                          bg="transparent"
                          placeholder="Eix."
                          focus={{
                            borderColor: '#4763E4',
                          }}
                          {...register('leftAxis', {
                            required: 'Campo obrigatório',
                            min: 0,
                            max: 180,
                          })}
                          disabled={!selectLeftEye}
                        />
                        {errors.leftAxis && (
                          <Typography className="alertDanger">
                            {errors.leftAxis.message}
                          </Typography>
                        )}
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
                          <select className="selectType" name="geometry">
                            {geometryData.map((geo) => {
                              const { id, value } = geo;
                              return (
                                <option key={id} value={value}>
                                  {value}
                                </option>
                              );
                            })}
                          </select>
                        </Box>
                      </Box>
                      <Box
                        as="div"
                        width="auto"
                        display="flex"
                        flexDirection="column"
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
                          <select className="selectType" name="refraction">
                            {refractionData.map((item) => {
                              const { id, size } = item;
                              return (
                                <option key={id} value={size}>
                                  {size}
                                </option>
                              );
                            })}
                          </select>
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
                      mt="0.5rem"
                    >
                      <Typography padding="0.5rem">Olho direito</Typography>
                      <Box
                        as="div"
                        display="flex"
                        flexDirection="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                      >
                        <Box
                          as="div"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height="3.5rem"
                        >
                          {selectRightEye ? (
                            <Input
                              p="L"
                              type="checkbox"
                              checked
                              outline="none"
                              border="1px solid #E4E4E7"
                              borderRadius="L"
                              color="textInverted"
                              mr={['NONE', 'S']}
                              ml={['NONE', 'S']}
                              minWidth={['100%', '5rem']}
                              width={['5rem']}
                              bg="transparent"
                              focus={{
                                borderColor: '#4763E4',
                              }}
                              onClick={handleToggleRightEyeOption}
                            />
                          ) : (
                            <Input
                              p="L"
                              type="checkbox"
                              outline="none"
                              border="1px solid #E4E4E7"
                              borderRadius="L"
                              color="textInverted"
                              mr={['NONE', 'S']}
                              ml={['NONE', 'S']}
                              minWidth={['100%', '5rem']}
                              width={['5rem']}
                              bg="transparent"
                              focus={{
                                borderColor: '#4763E4',
                              }}
                              onClick={handleToggleRightEyeOption}
                            />
                          )}
                        </Box>
                        <Input
                          type="number"
                          p="L"
                          min="-35"
                          max="20"
                          outline="none"
                          border="1px solid #E4E4E7"
                          borderRadius="M"
                          color="textInverted"
                          mr={['NONE', 'S']}
                          ml={['NONE', 'S']}
                          minWidth={['100%', '6.1rem']}
                          width={['6.1rem']}
                          bg="transparent"
                          placeholder="Esf."
                          focus={{
                            borderColor: '#4763E4',
                          }}
                          name="rightEspherical"
                          disabled={!selectRightEye}
                        />
                        <Input
                          type="number"
                          p="L"
                          min="-6"
                          max="7"
                          outline="none"
                          border="1px solid #E4E4E7"
                          borderRadius="M"
                          color="textInverted"
                          mr={['NONE', 'S']}
                          ml={['NONE', 'S']}
                          minWidth={['100%', '6.1rem']}
                          width={['6.1rem']}
                          bg="transparent"
                          placeholder="Cil."
                          focus={{
                            borderColor: '#4763E4',
                          }}
                          name="rightCylinder"
                          disabled={!selectRightEye}
                        />
                        <Input
                          type="number"
                          p="L"
                          min="0"
                          max="180"
                          outline="none"
                          border="1px solid #E4E4E7"
                          borderRadius="M"
                          color="textInverted"
                          mr={['NONE', 'S']}
                          ml={['NONE', 'S']}
                          minWidth={['100%', '6.1rem']}
                          width={['6.1rem']}
                          bg="transparent"
                          placeholder="Eix."
                          focus={{
                            borderColor: '#4763E4',
                          }}
                          name="rightAxis"
                          disabled={!selectRightEye}
                        />
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
                          <select className="selectType" name="color">
                            {colorData.map((item) => {
                              const { id, value } = item;
                              return (
                                <option key={id} value={value}>
                                  {value}
                                </option>
                              );
                            })}
                          </select>
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
                        <Typography padding="0.5rem">Tratamento</Typography>
                        <Box
                          as="div"
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          padding="0.5rem"
                        >
                          <select className="selectType" name="treatment">
                            {treatmentData.map((item) => {
                              const { id, value } = item;
                              return (
                                <option key={id} value={value}>
                                  {value}
                                </option>
                              );
                            })}
                          </select>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    as="div"
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
                        outline="none"
                        border="1px solid #E4E4E7"
                        borderRadius="M"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['24.7rem']}
                        bg="transparent"
                        placeholder="Lucas Mateus"
                        name="patientName"
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
                        Diâmetro
                      </Typography>
                      <Input
                        p="L"
                        type="number"
                        min="50"
                        max="80"
                        outline="none"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '5rem']}
                        width={['7.5rem']}
                        bg="transparent"
                        placeholder="70mm"
                        name="diameter"
                        focus={{
                          borderColor: '#4763E4',
                        }}
                      />
                    </Box>
                    <Box
                      as="div"
                      marginLeft="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Corredor
                      </Typography>
                      <select className="selectAdition" name="alway">
                        <option value="9">9</option>
                        <option value="11">11</option>
                        <option value="13">13</option>
                        <option value="15">15</option>
                        <option value="17">17</option>
                      </select>
                    </Box>
                    <Box
                      as="div"
                      marginLeft="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Coloração
                      </Typography>
                      <select className="selectAdition" name="coloring">
                        <option value="yes">Sim</option>
                        <option value="no">Não</option>
                      </select>
                    </Box>
                    <Box
                      as="div"
                      marginLeft="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Prisma
                      </Typography>
                      <select className="selectAdition" name="prism">
                        <option value="yes">Sim</option>
                        <option value="no">Não</option>
                      </select>
                    </Box>
                    <Box
                      as="div"
                      marginLeft="0.5rem"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Precal
                      </Typography>
                      <select className="selectAdition" name="precal">
                        <option value="yes">Sim</option>
                        <option value="no">Não</option>
                      </select>
                    </Box>
                  </Box>
                  <Box
                    as="div"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    mt="0.5rem"
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
                        outline="none"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['12.5rem']}
                        bg="transparent"
                        placeholder="23SW34B"
                        name="jobReference"
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
                      mt="2.1rem"
                    >
                      <Input
                        p="L"
                        type="file"
                        multiple
                        accept=".doc,.pdf,.jpg,.jpeg,.png"
                        borderRadius="M"
                        border="none"
                        color="#FFF"
                        className="inputFile"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        fontWeight="bold"
                        width={['12rem', 'NONE']}
                        minWidth={['100%', '10rem']}
                        bg="#4763E4"
                        name={file}
                        onChange={handleFileInputChange}
                      />
                      {file && (
                        <Typography padding="0.5rem">
                          Ficheiro: {file}
                        </Typography>
                      )}
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
                        Observações
                      </Typography>
                      <Box
                        as="textarea"
                        p="L"
                        rows="4"
                        cols="50"
                        maxlength="50"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['41.5rem']}
                        bg="transparent"
                        placeholder="Deixa aqui as suas observações"
                      />
                    </Box>
                  </Box>
                  <Typography as="h4" padding="0.5rem">
                    {`Subtotal: 0,00 AOA`}
                  </Typography>
                  <Box
                    as="div"
                    width="98%"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Button
                      p="L"
                      type="submit"
                      effect="hover"
                      display="flex"
                      variant="primary"
                      fontWeight="bold"
                      color="#FFF"
                      borderRadius="M"
                      border="none"
                      bg="#4763E4"
                      ml="1rem"
                      mt="1rem"
                      justifyContent="center"
                      width={['10rem', 'NONE']}
                      minWidth={['100%', '10rem']}
                      alignItems="center"
                      // onClick={handleOpenModalSelectAddress}
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
                          justifyContent="space-between"
                          alignItems="center"
                          border="none"
                          effect="hover"
                          padding={['S', 'XL']}
                          margin={['S', 'M']}
                          width={['67rem']}
                          minWidth={['100%', '10rem']}
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
                    variant="primary"
                    fontWeight="bold"
                    color="#FFF"
                    borderRadius="M"
                    border="none"
                    bg="#4763E4"
                    ml="0.5rem"
                    mt="1rem"
                    justifyContent="center"
                    width={['10rem', 'NONE']}
                    minWidth={['100%', '10rem']}
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
                    variant="primary"
                    color="#4763E4"
                    borderRadius="M"
                    border="none"
                    bg="transparent"
                    ml="0.5rem"
                    mt="1rem"
                    justifyContent="center"
                    width={['15rem', 'NONE']}
                    minWidth={['100%', '10rem']}
                    alignItems="center"
                    onClick={handleOpenModalNewAddress}
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
                  width="100%"
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
                      outline="none"
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['32rem']}
                      bg="transparent"
                      placeholder="Benguela"
                      name="province"
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
                      outline="none"
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['32rem']}
                      bg="transparent"
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
                      outline="none"
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['68rem']}
                      bg="transparent"
                      name="city"
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
                    outline="none"
                    borderRadius="M"
                    border="1px solid #E4E4E7"
                    color="textInverted"
                    mr={['NONE', 'S']}
                    ml={['NONE', 'S']}
                    minWidth={['100%', '10rem']}
                    width={['68rem']}
                    bg="transparent"
                    placeholder="Rua das casas amarelas"
                    name="street"
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
                      outline="none"
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['32rem']}
                      bg="transparent"
                      name="apt"
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
                      outline="none"
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['32rem']}
                      bg="transparent"
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
                    type="button"
                    effect="hover"
                    display="flex"
                    variant="primary"
                    color="#000"
                    borderRadius="M"
                    border="1px solid #E4E4E7"
                    bg="transparent"
                    mt="1rem"
                    width={['10rem', 'NONE']}
                    minWidth={['100%', '10rem']}
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                  <Button
                    p="L"
                    type="button"
                    effect="hover"
                    display="flex"
                    variant="primary"
                    fontWeight="bold"
                    color="#FFF"
                    borderRadius="M"
                    border="none"
                    bg="#4763E4"
                    ml="0.5rem"
                    mt="1rem"
                    justifyContent="center"
                    width={['12rem', 'NONE']}
                    minWidth={['100%', '10rem']}
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
                    border={`1px solid ${
                      paymentByReference ? '#4763E4' : '#E4E4E7'
                    }`}
                    borderRadius="M"
                    mr={['NONE', 'S']}
                    ml={['NONE', 'S']}
                    minWidth={['100%', '10rem']}
                    width={['34rem']}
                    bg="transparent"
                    onClick={handlePaymentByReference}
                  >
                    <Image
                      src="/reference-payment.svg"
                      height={50}
                      width={50}
                      alt="Pagamento por referência"
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
                    borderRadius="M"
                    border={`1px solid ${
                      paymentByExpress ? '#4763E4' : '#E4E4E7'
                    }`}
                    mr={['NONE', 'S']}
                    ml={['NONE', 'S']}
                    minWidth={['100%', '10rem']}
                    width={['34rem']}
                    bg="transparent"
                    onClick={handlePaymentByExpress}
                  >
                    <Image
                      src="/express.svg"
                      alt="Multicaixa Express"
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
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Entidade
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        outline="none"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="491 Oftal Pro"
                        name="entity"
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
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Referência
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        outline="none"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="001437785"
                        name="reference"
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
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Montante
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['69rem']}
                        bg="transparent"
                        name="amount"
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
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Número de telefone
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        outline="none"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="923 009 161"
                        name="phoneNumber"
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
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Montante
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="3.845.000,00"
                        name="amount"
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
                  type="button"
                  effect="hover"
                  variant="primary"
                  color="#000"
                  borderRadius="M"
                  border="1px solid #E4E4E7"
                  bg="transparent"
                  mt="1rem"
                  width={['10rem', 'NONE']}
                  minWidth={['100%', '10rem']}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                  onClick={handleCancelPayment}
                >
                  Cancelar
                </Button>
                <Button
                  p="L"
                  type="button"
                  effect="hover"
                  variant="primary"
                  fontWeight="bold"
                  color="#FFF"
                  width={200}
                  borderRadius="M"
                  border="none"
                  bg="#4763E4"
                  ml="0.5rem"
                  mt="1rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minWidth={['100%', '10rem']}
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
              <Image
                src="/success.svg"
                alt="icon de operação bem sucedida "
                width={100}
                height={100}
                style={{ margin: '0.5rem' }}
              />
              <Typography as="h4" margin="0.5rem">
                Obrigado pela sua compra.
              </Typography>
              <Typography
                color="#BBBBBB"
                padding="0.5rem"
                margin="0.5rem"
                width="40rem"
                textAlign="center"
              >
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
                  width={10}
                  height={10}
                  variant="primary"
                  color="#27272A"
                  bg="transparent"
                  mt="M"
                  border="0.5px solid #E4E4E7"
                  mb="M"
                  justifyContent="center"
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pag) => {
                  return (
                    <Button
                      p="0.8rem"
                      type="button"
                      key={pag}
                      display="flex"
                      width={10}
                      height={10}
                      variant="primary"
                      color="#27272A"
                      bg="transparent"
                      mt="M"
                      border="0.5px solid #E4E4E7"
                      mb="M"
                      justifyContent="center"
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
                  width={10}
                  height={10}
                  variant="primary"
                  color="#27272A"
                  bg="transparent"
                  mt="M"
                  border="0.5px solid #E4E4E7"
                  mb="M"
                  justifyContent="center"
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
