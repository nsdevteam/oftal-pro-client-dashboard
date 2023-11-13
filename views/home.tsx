import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Eye, EyeSlash } from '../components/image-svg';
import Alert from '../components/layout/alert';
import LogoSVG from '../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../constants/routes';
import { Box, Button, Input, Typography } from '../elements';
import { useFirebase } from '../hooks';

const Home: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const { handleFirebaseConfig } = useFirebase();

  const router = useRouter();

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const onLoginSubmit = async () => {
    try {
      const email = getValues('email');
      const password = getValues('password');
      const auth = getAuth();

      const checkUser = await signInWithEmailAndPassword(auth, email, password);
      if (checkUser) {
        router.push('/request');
      }
      setValue('email', '');
      setValue('password', '');
    } catch (err) {
      console.log('====================================');
      console.log('>> Error signing :: ', err);
      console.log('====================================');
      showAlert(true, 'Danger', 'Erro ao entrar, verifique as credências');
    }
  };

  useEffect(() => {
    handleFirebaseConfig();
  }, []);

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
        width="700"
        padding="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        ml={['NONE', 'S']}
        mr={['NONE', 'S']}
      >
        <LogoSVG />
        <Typography padding="0.5rem">
          Insira os seus dados e clique em entrar
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
                border: '1px solid #4763E4',
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
          <Box
            as="div"
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            marginTop="1rem"
            marginBottom="1rem"
          >
            <Typography padding="0.5rem">Não tem uma conta?</Typography>
            <Link
              style={{ padding: '0.5rem' }}
              href={RoutePaths[RoutesEnum.SignIn]}
            >
              Crie uma.{' '}
            </Link>
          </Box>
          <Button
            p="L"
            type="button"
            effect="hover"
            display="flex"
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            mr={['NONE', 'S']}
            ml={['NONE', 'S']}
            minWidth={['100%', '10rem']}
            width={['30rem', 'NONE']}
            borderRadius="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            alignItems="center"
            onClick={handleSubmit(onLoginSubmit)}
          >
            Entrar &rarr;
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
          <Typography padding="0.5rem">Esqueceu a sua senha?</Typography>
          <Link href={RoutePaths[RoutesEnum.ResetPassword]}>
            Solicitar uma nova senha.{' '}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
