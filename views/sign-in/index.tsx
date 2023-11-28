import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { login } from '../../api/auth';
import { EyeSlashSVG, EyeSVG } from '../../components/svg';
import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { useUser } from '../../context/user';
import { Box, Button, Input, Typography } from '../../elements';

const Home: FC = () => {
  const { userAuth, forceVerifyLogin, loading } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const { push } = useRouter();

  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = async () => {
    try {
      const { email, password } = getValues();

      await login(email, password);

      forceVerifyLogin();
      reset();
    } catch {
      throw Error();
    }
  };

  useEffect(() => {
    if (userAuth && !loading) push('/request');
  }, [userAuth, loading]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () =>
    toast.promise(onLoginSubmit(), {
      loading: 'Iniciando a sessão',
      success: 'Sessão iniciada com sucesso',
      error: 'Erro ao iniciar a sessão',
    });

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
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          mt={['XL', 'XL', 'XL', 'NONE']}
          flexDirection="column"
          justifyContent="center"
        >
          <form onSubmit={handleSubmit(handleLogin)}>
            <Box
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
                nFocus={{
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
                  mt={['22rem', 'NONE']}
                  ml={['9rem', 'NONE']}
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
              mb="1.5rem"
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
                  width="50rem"
                  placeholder="***************"
                  nFocus={{
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
                    mt={['23rem', 'NONE']}
                    ml={['6.5rem', 'NONE']}
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
                    <EyeSVG width={16} height={16} />
                  ) : (
                    <EyeSlashSVG width={16} height={16} />
                  )}
                </Box>
              </Box>
            </Box>
            <Button
              p="L"
              type="submit"
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
            >
              Entrar &rarr;
            </Button>
          </form>
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
