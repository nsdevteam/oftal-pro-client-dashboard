import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Eye, EyeSlash } from '../../components/image-svg';
import Alert from '../../components/layout/alert';
import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Button, Input, Typography } from '../../elements';
import { useFirebase } from '../../hooks';

const Signin: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const { handleFirebaseConfig } = useFirebase();

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  useEffect(() => {
    handleFirebaseConfig();
  }, []);

  const onSubmit = async () => {
    const { email, password } = getValues();

    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        setValue('fullName', '');
        setValue('email', '');
        setValue('password', '');
        showAlert(true, 'Success', 'A sua conta foi criada com sucesso.');
        console.log('User signed up successfully!');
      });
    } catch (error) {
      console.error('Error signing up:', error);
      showAlert(true, 'Danger', 'Erro ao criar conta');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box
      as="div"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Box
        height="700px"
        padding="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <LogoSVG />
        <Typography padding="0.5rem">
          Crie uma conta e desfrute do melhor que temos para si
        </Typography>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <Box
          as="form"
          width="100%"
          display="flex"
          alignItems="center"
          mt={['XL', 'XL', 'XL', 'NONE']}
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            as="div"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography textAlign="left" padding="0.5rem">
              Nome completo
            </Typography>
            <Input
              p="L"
              type="text"
              bg="transparent"
              outline="none"
              borderRadius="M"
              border="1px solid #E4E4E7"
              mr={['NONE', 'S']}
              ml={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['30rem']}
              color="textInverted"
              placeholder="John Doe"
              focus={{
                borderColor: '#4763E4',
              }}
              {...register('fullName', {
                required: 'O campo nome é obrigatório',
              })}
            />
          </Box>
          <Box
            as="div"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography textAlign="left" padding="0.5rem">
              Email
            </Typography>
            <Input
              p="L"
              type="email"
              bg="transparent"
              outline="none"
              borderRadius="M"
              border="1px solid #E4E4E7"
              color="textInverted"
              mr={['NONE', 'S']}
              ml={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['30rem']}
              placeholder="johndoe@oftalpro.com"
              focus={{
                borderColor: '#4763E4',
              }}
              {...register('email', {
                required: 'Campo email é obrigatório',
                max: {
                  value: 6,
                  message: 'O email deve ter no máximo 6 caracteres',
                },
              })}
            />
            {errors.email && (
              <Box
                as="div"
                position="absolute"
                width="auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt={['23rem', 'NONE']}
                ml={['7.5rem', 'NONE']}
              >
                <Typography className="alertDanger">
                  {errors.email.message as string}
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            as="div"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography textAlign="left" padding="0.5rem">
              Senha
            </Typography>
            <Box
              mr={['NONE', 'S']}
              ml={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['30rem']}
              color="textInverted"
              borderRadius="M"
              border="1px solid #E4E4E7"
              bg="transparent"
              display="flex"
              flexWrap="nowrap"
              overflow="hidden"
              alignItems="center"
              justifyContent="stretch"
            >
              <Input
                p="L"
                type={showPassword ? 'text' : 'password'}
                bg="transparent"
                border="none"
                borderRadius="M"
                outline="none"
                minWidth={['100%', '10rem']}
                width={['50rem']}
                placeholder="***************"
                focus={{
                  borderColor: '#4763E4',
                  borderSize: '1px',
                  borderStyle: 'solid',
                }}
                {...register('password', {
                  required: 'Campo palavra-passe é obrigatório',
                  maxLength: {
                    value: 12,
                    message: 'O email deve ter no máximo 12 caracteres',
                  },
                })}
              />
              {errors.password && (
                <Box
                  as="div"
                  position="absolute"
                  width="auto"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  mt={['26rem', 'NONE']}
                  ml={['5rem', 'NONE']}
                >
                  <Typography className="alertDanger">
                    {errors.password.message as string}
                  </Typography>
                </Box>
              )}
              <Box
                onClick={togglePasswordVisibility}
                cursor="pointer"
                margin="0.5rem"
              >
                {showPassword ? (
                  <Eye width={16} height={16} />
                ) : (
                  <EyeSlash width={16} height={16} />
                )}
              </Box>
            </Box>
          </Box>
          <Typography padding="1rem" marginTop="1rem">
            Próximo passo
          </Typography>
          <Button
            p="L"
            type="button"
            effect="hover"
            display="flex"
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            width={['30rem', 'NONE']}
            borderRadius="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            minWidth={['100%', '10rem']}
            alignItems="center"
            onClick={onSubmit}
          >
            Criar conta &rarr;
          </Button>
        </Box>
        <Box
          as="div"
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          marginTop="1rem"
        >
          <Typography padding="0.5rem">Já tem uma conta?</Typography>
          <Link
            style={{ padding: '0.5rem' }}
            href={RoutePaths[RoutesEnum.Home]}
          >
            Entrar.{' '}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
