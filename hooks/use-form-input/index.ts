import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
}

const useFormInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    reset,
    onSubmit,
    errors,
  };
};

export default useFormInput;
