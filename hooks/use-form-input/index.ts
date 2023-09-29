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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = () => {
    try {
      setShowSelectAddress(!showSelectAddress);
      setModalOpen(false);
    } catch (err) {
      console.log(err, 'Something went wrong');
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
  };
};

export default useFormInput;
