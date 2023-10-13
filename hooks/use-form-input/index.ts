import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { address } from '../../api';
import { Address, Payment, TRowData } from '../../interface';

const id = uuidv4();

export interface FormData {
  leftSpherical?: number;
  leftCylinder?: number;
  leftAxis?: number;
  rightSpherical?: number;
  rightCylinder?: number;
  rightAxis?: number;
  refraction?: string;
  geometry?: string;
  indiceOfRefraction?: number;
  color?: string;
  treatment?: string;
  diameter?: number;
  alway?: number;
  coloring?: number;
  prism?: number;
  precal?: number;
  patientName: string;
  jobReference: string;
  observation: string;
  file?: FileList | unknown;
  amount?: number;
  address?: Address | undefined;
  payment?: Payment | undefined;
}

const useFormInput = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [showSelectAddress, setShowSelectAddress] = useState<boolean>(false);
  const [selectAddress, setSelectAddress] = useState<Address | null>(null);
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false);
  const [paymentModal, setPaymentModal] = useState<boolean>(false);
  const [paymentByReference, setPaymentByReference] = useState<boolean>(false);
  const [paymentByExpress, setPaymentByExpress] = useState<boolean>(false);
  const [paymentSucceed, setPaymentSucceed] = useState<boolean>(false);
  const [selectLeftEye, setSelectLeftEye] = useState<boolean>(false);
  const [selectRightEye, setSelectRightEye] = useState<boolean>(false);
  const [request, setRequest] = useState<Array<FormData>>([]);
  const [addresses, setAddresses] = useState<Address[]>(address);
  const [payment, setPayment] = useState<Payment[] | null>(null);
  const [shortRequestInfo, setShortRequestInfo] = useState<
    Array<TRowData & { file: string }>
  >([]);
  const amount = 0;
  let totalAmount = 0;

  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      if (data.treatment === 'UC') {
        totalAmount = amount + 2000;
        if (data.file) {
          totalAmount += 5000;
        }
      }
      // if (data.indiceOfRefraction === 1.5) {
      // }
      const newRequest = [...request, data];

      const mappedRequest: Array<TRowData & { file: string }> = newRequest.map(
        ({
          patientName,
          geometry,
          refraction,
          color,
          treatment,
          diameter,
          amount,
          file,
        }) => ({
          patientName,
          geometry,
          refraction,
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
      console.log('>>>Something went wrong adding new request ::', error);
      console.log('====================================');
    }
  };

  const handleAddressSelected = (addressItem: Address) => {
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

      const newAddress: Address = {
        id,
        province,
        state,
        city,
        street,
        apt,
        house,
      };

      const updateAddress: Address[] = [...addresses, newAddress];

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
    totalAmount,
  };
};

export default useFormInput;