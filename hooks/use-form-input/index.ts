import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { address } from '../../constants';
import { AddressProps, IOrder, PaymentProps, TRowData } from '../../interface';
import { useSubtotal } from '../use-subtotal';

const id = uuidv4();

const useFormInput = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [showSelectAddress, setShowSelectAddress] = useState<boolean>(false);
  const [selectAddress, setSelectAddress] = useState<AddressProps | null>(null);
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false);
  const [paymentModal, setPaymentModal] = useState<boolean>(false);
  const [paymentByReference, setPaymentByReference] = useState<boolean>(false);
  const [paymentByExpress, setPaymentByExpress] = useState<boolean>(false);
  const [paymentSucceed, setPaymentSucceed] = useState<boolean>(false);
  const [selectLeftEye, setSelectLeftEye] = useState<boolean>(false);
  const [selectRightEye, setSelectRightEye] = useState<boolean>(false);
  const [request, setRequest] = useState<Array<IOrder>>([]);
  const [addresses, setAddresses] = useState<AddressProps[]>(address);
  const [payment, setPayment] = useState<PaymentProps[] | null>(null);
  const [shortRequestInfo, setShortRequestInfo] = useState<
    Array<TRowData & { file: string }>
  >([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IOrder>({
    reValidateMode: 'onBlur',
  });

  const subtotal = useSubtotal(control);

  const onSubmit: SubmitHandler<IOrder> = (data) => {
    try {
      if (data.treatment === 'UC') {
        setValue('indiceOfRefraction', 1.5);
      }

      if (data.indiceOfRefraction === 1.5) {
        alert('índice of refraction igual 1.5');
      }

      const newRequest = [...request, data];

      const mappedRequest: Array<any> = newRequest.map(
        ({
          patientName,
          geometry,
          indiceOfRefraction,
          color,
          treatment,
          diameter,
          amount,
          file,
        }) => ({
          patientName,
          geometry,
          indiceOfRefraction,
          color,
          treatment,
          diameter,
          amount,
          file: file
            ? [...(file as unknown as Array<File>)][0]?.name ?? ''
            : '',
        })
      );

      setShortRequestInfo(mappedRequest);

      setShowSelectAddress(!showSelectAddress);
      setModalOpen(false);
      setRequest(newRequest);
      reset();
    } catch (error) {
      console.log('====================================');
      console.log('>>> Something went wrong adding new request ::', error);
      console.log('====================================');
    }
  };

  const handleAddressSelected = (addressItem: AddressProps) => {
    setSelectAddress(addressItem);
  };

  const handleOpenModalNewAddress = () => {
    setAddNewAddress(!addNewAddress);
    setShowSelectAddress(false);
  };

  const handleUseAddress = () => {
    try {
      const province = getValues('address.province');
      const state = getValues('address.state');
      const city = getValues('address.city');
      const street = getValues('address.street');
      const apt = getValues('address.apt');
      const house = getValues('address.house');

      const newAddress: AddressProps = {
        id,
        province,
        state,
        city,
        street,
        apt,
        house,
      };

      const updateAddress: AddressProps[] = [...addresses, newAddress];

      setAddresses(updateAddress);
      setSelectAddress(newAddress);

      setShowSelectAddress(true);
      setAddNewAddress(false);

      setValue('address.province', '');
      setValue('address.state', '');
      setValue('address.city', '');
      setValue('address.street', '');
      setValue('address.apt', '');
      setValue('address.house', '');
    } catch (error) {
      console.log('====================================');
      console.log('>>> Error adding new address', error);
      console.log('====================================');
    }
  };

  const handlePaymentModal = () => {
    setPaymentModal(false);
    setShowSelectAddress(false);

    setPayment([]);
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

  return {
    register,
    watch,
    handleSubmit,
    errors,
    isModalOpen,
    showSelectAddress,
    selectAddress,
    addNewAddress,
    paymentModal,
    paymentByReference,
    paymentByExpress,
    paymentSucceed,
    selectLeftEye,
    selectRightEye,
    control,
    request,
    addresses,
    payment,
    setRequest,
    getValues,
    setModalOpen,
    setShowSelectAddress,
    setSelectAddress,
    setAddNewAddress,
    setPaymentModal,
    setPaymentByReference,
    setPaymentSucceed,
    setPaymentByExpress,
    setSelectLeftEye,
    setSelectRightEye,
    onSubmit,
    handleAddressSelected,
    handleOpenModalNewAddress,
    handleUseAddress,
    handlePaymentModal,
    handleCancel,
    openModal,
    closeModal,
    handleOpenPaymentModal,
    handlePaymentByReference,
    handlePaymentByExpress,
    handleCancelPayment,
    handlePaymentSucceed,
    handleToggleLeftEyeOption,
    handleToggleRightEyeOption,
    shortRequestInfo,
    subtotal,
  };
};

export default useFormInput;
