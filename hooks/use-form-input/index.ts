import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
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
}

const requestData = [
  {
    id: 1,
    leftSpherical: 12,
    leftCylinder: 2,
    leftAxis: 0,
    geometry: 'Unifocal',
    indiceOfRefraction: 1.5,
    rightSpherical: 4,
    rightCylinder: 6,
    rightAxis: 8,
    color: 'Branca',
    treatment: 'HMC',
    patientName: 'Mario Silva',
    diamenter: 12,
    alway: 99,
    prism: 10,
    precal: 67,
    jobReference: '12BD678',
    observation: 'Preciso de dois pares de lente com as mesmas especificações',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useFormInput = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [showSelectAddress, setShowSelectAddress] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | boolean | null>(null);
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false);
  const [paymentModal, setPaymentModal] = useState<boolean>(false);
  const [paymentByReference, setPaymentByReference] = useState<boolean>(false);
  const [paymentByExpress, setPaymentByExpress] = useState<boolean>(false);
  const [paymentSucceed, setPaymentSucceed] = useState<boolean>(false);
  const [selectLeftEye, setSelectLeftEye] = useState<boolean>(false);
  const [selectRightEye, setSelectRightEye] = useState<boolean>(false);
  const [file, setFile] = useState<string | undefined>(undefined);
  const [request, setRequest] = useState<Array<string>>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: unknown) => {
    try {
      const newRequest = requestData.push(data);
      setRequest(newRequest);
      setShowSelectAddress(!showSelectAddress);
      setModalOpen(false);
    } catch (err) {
      console.log(err, 'Something went wrong adding new request');
    }
  };

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

  return {
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
    request,
    setRequest,
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
    handleFileInputChange,
    requestData,
  };
};

export default useFormInput;
