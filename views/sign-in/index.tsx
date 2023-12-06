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
  } = useForm({
    reValidateMode: 'onBlur',
  });

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
      width={['auto', 'auto', 'auto', '100%']}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <LogoSVG />
        <Typography m="L" fontSize={['0.5rem', '1rem']}>
          Insira os seus dados e clique em prosseguir
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Box pt="1rem">
          <Typography
            fontSize={['0.5rem', '1rem']}
            textAlign="left"
            py="0.5rem"
          >
            Email
          </Typography>
          <Input
            width={['18rem', '30rem']}
            p={['0.5rem', 'L']}
            fontSize={['0.5rem', '1rem']}
            type="email"
            bg="transparent"
            outline="none"
            borderRadius="M"
            border="1px solid #E4E4E7"
            color="textInverted"
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
            <Typography className="alertDanger">
              {errors.email.message as string}
            </Typography>
          )}
        </Box>
        <Box pt="1rem">
          <Typography
            fontSize={['0.5rem', '1rem']}
            textAlign="left"
            py="0.5rem"
          >
            Senha
          </Typography>
          <Box
            width={['18rem', '30rem']}
            height={['2rem', '3.5rem']}
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
              width={['18rem', '30rem']}
              height={['100%']}
              p={['M', 'L']}
              fontSize={['0.5rem', '1rem']}
              type={showPassword ? 'text' : 'password'}
              bg="transparent"
              border="none"
              borderRadius="M"
              outline="none"
              minWidth={['100%', '10rem']}
              placeholder="***************"
              nFocus={{
                border: '1px solid #4763E4',
              }}
              {...register('password', {
                required: 'Campo palavra-passe é obrigatório',
                maxLength: {
                  value: 12,
                  message: 'O email deve ter no máximo 12 caracteres',
                },
              })}
            />
            <Box onClick={togglePasswordVisibility} cursor="pointer" m="0.5rem">
              {showPassword ? (
                <EyeSVG width={16} height={16} />
              ) : (
                <EyeSlashSVG width={16} height={16} />
              )}
            </Box>
          </Box>
          {errors.password && (
            <Typography className="alertDanger">
              {errors.password.message as string}
            </Typography>
          )}
        </Box>
        <Typography
          fontSize={['0.5rem', '1rem']}
          p={['0.5rem', 'L']}
          my={['0.5rem', 'L']}
          textAlign="center"
        >
          Próximo passo
        </Typography>
        <Button
          p={['0.5rem', 'L']}
          fontSize={['0.5rem', '1rem']}
          type="submit"
          effect="hover"
          display="flex"
          variant="primary"
          fontWeight="bold"
          color="#FFF"
          my={['0.5rem', 'L']}
          width={['18rem', '30rem']}
          borderRadius="M"
          border="none"
          bg="#4763E4"
          justifyContent="center"
          alignItems="center"
        >
          Entrar &rarr;
        </Button>
      </form>
      <Box
        as="div"
        display="flex"
        fontSize={['0.5rem', '1rem']}
        justifyContent="center"
        alignItems="center"
      >
        <Typography padding="0.5rem">Esqueceu a sua senha?</Typography>
        <Link href={RoutePaths[RoutesEnum.ResetPassword]}>
          Solicitar uma nova senha.
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
