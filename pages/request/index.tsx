import Image from 'next/image';
import { FC } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiSearch,
  FiX,
} from 'react-icons/fi';

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
import { TTableHeadings } from '../../interface';
import RequestModal from './request-modal';

const RequestPage: FC = () => {
  const {
    register,
    errors,
    isModalOpen,
    showSelectAddress,
    selectAddress,
    addNewAddress,
    paymentModal,
    paymentByReference,
    paymentByExpress,
    paymentSucceed,
    setShowSelectAddress,
    setAddNewAddress,
    setPaymentSucceed,
    handleAddressSelected,
    handleOpenModalNewAddress,
    handleUseAddress,
    handlePaymentModal,
    handleCancel,
    handleOpenPaymentModal,
    handlePaymentByReference,
    handlePaymentByExpress,
    handleCancelPayment,
    handlePaymentSucceed,
    shortRequestInfo,
    closeModal,
    addresses,
    openModal,
  } = useFormInput();

  const columns: Array<keyof TTableHeadings> = [
    'patientName',
    'geometry',
    'indiceOfRefraction',
    'color',
    'treatment',
    'diameter',
  ];

  return (
    <Layout pageTitle="Pedidos">
      <Box
        as="div"
        height="80vh"
        width={['100vw', '100vw', '100vw', '80vw', '80vw']}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="flex-start"
        padding="1rem"
        ml={['-14rem', 'auto', 'auto', 'auto', 'auto']}
        fontSize={['0.5rem', '1rem']}
      >
        <Typography padding="0.5rem">Pedidos</Typography>
        <Box as="form" width="100vw" padding="0.5rem">
          <Box
            bg="transparent"
            mr={['NONE', 'S']}
            color="textInverted"
            width={['15rem', '76%']}
            height={['2rem', '3.5rem']}
            borderRadius="M"
            border="1px solid #E4E4E7"
            display="flex"
            flexWrap="nowrap"
            overflow="hidden"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              cursor="pointer"
              p="0.5rem"
              pr="0"
              height={['2rem', '3.5rem']}
              width={['2rem', '3.5rem']}
            >
              <FiSearch size={'100%'} />
            </Box>
            <Input
              p="L"
              type="text"
              fontSize={['0.5rem', '1rem']}
              border="none"
              borderRadius="M"
              outline="none"
              backgroundColor="transparent"
              mr={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['18rem', '30rem']}
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
            height={['2rem', '3.5rem']}
            width={['7rem', '10rem']}
            fontSize={['0.5rem', '1rem']}
            borderRadius="M"
            marginTop="M"
            marginBottom="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            alignItems="center"
            onClick={openModal}
          >
            Novo pedido
            <FiPlus size={18} color="#FFF" />
          </Button>
        </Box>
        <Box as="div" width={['15rem', '76%']} height="100%" p="0.5rem">
          <Typography as="h2">Listagem de pedidos</Typography>
          <Table data={shortRequestInfo} columns={columns} />
          <Typography as="h4">Total da compra: 0,00 AOA</Typography>
          <RequestModal isModalOpen={isModalOpen} closeModal={closeModal} />
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
                  {addresses.map((addressItem) => {
                    const { id, province, city, street, apt } = addressItem;
                    return (
                      <Box
                        as="div"
                        key={id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className="address-list"
                        onClick={() => handleAddressSelected(addressItem)}
                      >
                        <Button
                          key={id}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          border="none"
                          effect="hover"
                          padding={['S', 'XL']}
                          margin={['S', 'M']}
                          fontSize={['0.5rem', '1rem']}
                          width={['67rem']}
                          minWidth={['100%', '10rem']}
                          borderRadius="5px"
                          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                          bg={
                            selectAddress === addressItem
                              ? '#F2F2F2'
                              : 'transparent'
                          }
                          variant="primary"
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
                            bg={
                              selectAddress === addressItem
                                ? '#4763E4'
                                : 'transparent'
                            }
                          />
                        </Button>
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
                    fontSize={['0.5rem', '1rem']}
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
                    fontSize={['0.5rem', '1rem']}
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
            <Modal isOpen={isModalOpen} onClose={() => setAddNewAddress(false)}>
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
                      fontSize={['0.5rem', '1rem']}
                      bg="transparent"
                      placeholder="Benguela"
                      {...register('address.province', {
                        required: 'Campo província é obrigatório',
                        maxLength: {
                          value: 16,
                          message:
                            'Campo província deve ter no máximo 16 caracteres',
                        },
                        minLength: {
                          value: 6,
                          message:
                            'Campo província deve ter no mínimo 4 caracteres',
                        },
                      })}
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                    />
                    {errors.address?.province && (
                      <Typography className="alertDanger">
                        {errors.address?.province.message}
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
                      Município
                    </Typography>
                    <Input
                      p="L"
                      type="text"
                      outline="none"
                      fontSize={['0.5rem', '1rem']}
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['32rem']}
                      bg="transparent"
                      placeholder="Lobito"
                      {...register('address.state', {
                        required: 'Campo município é obrigatório',
                        maxLength: {
                          value: 16,
                          message:
                            'Campo município deve ter no máximo 16 caracteres',
                        },
                        minLength: {
                          value: 6,
                          message:
                            'Campo município deve ter no mínimo 4 caracteres',
                        },
                      })}
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                    />
                    {errors.address?.state && (
                      <Typography className="alertDanger">
                        {errors.address?.state.message}
                      </Typography>
                    )}
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
                      fontSize={['0.5rem', '1rem']}
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['68rem']}
                      bg="transparent"
                      placeholder="Bairro da Camunda"
                      {...register('address.city', {
                        required: 'Campo bairro é obrigatório',
                        maxLength: {
                          value: 16,
                          message:
                            'Campo bairro deve ter no máximo 10 caracteres',
                        },
                      })}
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                    />
                    {errors.address?.city && (
                      <Typography className="alertDanger">
                        {errors.address?.city.message}
                      </Typography>
                    )}
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
                    fontSize={['0.5rem', '1rem']}
                    borderRadius="M"
                    border="1px solid #E4E4E7"
                    color="textInverted"
                    mr={['NONE', 'S']}
                    ml={['NONE', 'S']}
                    minWidth={['100%', '10rem']}
                    width={['68rem']}
                    bg="transparent"
                    placeholder="Rua das casas amarelas"
                    {...register('address.street', {
                      required: 'Campo bairro é obrigatório',
                    })}
                    nFocus={{
                      borderColor: '#4763E4',
                    }}
                  />
                  {errors.address?.street && (
                    <Typography className="alertDanger">
                      {errors.address?.street.message}
                    </Typography>
                  )}
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
                      fontSize={['0.5rem', '1rem']}
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['32rem']}
                      bg="transparent"
                      placeholder="Casa S/N"
                      {...register('address.apt', {
                        required: 'Campo número da casa é obrigatório',
                      })}
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                    />
                    {errors.address?.apt && (
                      <Typography className="alertDanger">
                        {errors.address?.apt.message}
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
                      Edifício
                    </Typography>
                    <Input
                      p="L"
                      type="text"
                      outline="none"
                      fontSize={['0.5rem', '1rem']}
                      borderRadius="M"
                      border="1px solid #E4E4E7"
                      color="textInverted"
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                      minWidth={['100%', '10rem']}
                      width={['32rem']}
                      bg="transparent"
                      placeholder="Antiga sede da ENDE"
                      {...register('address.house', {
                        required: 'Campo edíficio é obrigatório',
                      })}
                      nFocus={{
                        borderColor: '#4763E4',
                      }}
                    />
                    {errors.address?.house && (
                      <Typography className="alertDanger">
                        {errors.address?.house.message}
                      </Typography>
                    )}
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
                    fontSize={['0.5rem', '1rem']}
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
                    fontSize={['0.5rem', '1rem']}
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
          <Modal isOpen={isModalOpen} onClose={handlePaymentModal}>
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
                        fontSize={['0.5rem', '1rem']}
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="491 Oftal Pro"
                        {...register('payment.entity', {
                          required: 'Campo entidade é obrigatório',
                        })}
                        nFocus={{
                          borderColor: '#4763E4',
                        }}
                      />
                      {errors.payment?.entity && (
                        <Typography className="alertDanger">
                          {errors.payment?.entity.message}
                        </Typography>
                      )}
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
                        fontSize={['0.5rem', '1rem']}
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="001437785"
                        {...register('payment.reference', {
                          required: 'Campo referência é obrigatório',
                        })}
                        nFocus={{
                          borderColor: '#4763E4',
                        }}
                      />
                      {errors.payment?.reference && (
                        <Typography className="alertDanger">
                          {errors.payment?.reference.message}
                        </Typography>
                      )}
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
                        fontSize={['0.5rem', '1rem']}
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['69rem']}
                        bg="transparent"
                        placeholder="1.000.000,00"
                        {...register('payment.amount', {
                          required: 'Campo montante é obrigatório',
                        })}
                        nFocus={{
                          borderColor: '#4763E4',
                        }}
                      />
                      {errors.payment?.amount && (
                        <Typography className="alertDanger">
                          {errors.payment?.amount.message}
                        </Typography>
                      )}
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
                        fontSize={['0.5rem', '1rem']}
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="923 009 161"
                        {...register('payment.phoneNumber', {
                          required: 'Campo número de telefone é obrigatório',
                        })}
                        nFocus={{
                          borderColor: '#4763E4',
                        }}
                      />
                      {errors.payment?.phoneNumber && (
                        <Typography className="alertDanger">
                          {errors.payment?.phoneNumber.message}
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
                      mr={['NONE', 'S']}
                      ml={['NONE', 'S']}
                    >
                      <Typography textAlign="left" padding="0.5rem">
                        Montante
                      </Typography>
                      <Input
                        p="L"
                        type="text"
                        fontSize={['0.5rem', '1rem']}
                        borderRadius="M"
                        border="1px solid #E4E4E7"
                        color="textInverted"
                        mr={['NONE', 'S']}
                        ml={['NONE', 'S']}
                        minWidth={['100%', '10rem']}
                        width={['34rem']}
                        bg="transparent"
                        placeholder="3.845.000,00"
                        {...register('payment.amount', {
                          required: 'Campo montante é obrigatório',
                        })}
                        nFocus={{
                          borderColor: '#4763E4',
                        }}
                      />
                      {errors.payment?.amount && (
                        <Typography className="alertDanger">
                          {errors.payment?.amount.message}
                        </Typography>
                      )}
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
                  fontSize={['0.5rem', '1rem']}
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
                  fontSize={['0.5rem', '1rem']}
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
          <Modal isOpen={isModalOpen} onClose={() => setAddNewAddress(false)}>
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
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box
            as="div"
            width="100vw"
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
              >
                <Button
                  p={['0.4rem', '0.8rem']}
                  type="button"
                  fontSize={['0.5rem', '1rem']}
                  effect="hover"
                  display="flex"
                  width={['0.3rem', '0.9rem']}
                  height={['0.3rem', '0.9rem']}
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
                      p={['0.4rem', '0.8rem']}
                      type="button"
                      fontSize={['0.5rem', '1rem']}
                      key={pag}
                      display="flex"
                      width={['0.3rem', '0.9rem']}
                      height={['0.3rem', '0.9rem']}
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
                  p={['0.4rem', '0.8rem']}
                  type="button"
                  effect="hover"
                  display="flex"
                  width={['0.3rem', '0.9rem']}
                  height={['0.3rem', '0.9rem']}
                  variant="primary"
                  color="#27272A"
                  bg="transparent"
                  mt="M"
                  border="0.5px solid #E4E4E7"
                  mb="M"
                  fontSize={['0.5rem', '1rem']}
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

export default RequestPage;
