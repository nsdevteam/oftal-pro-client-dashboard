import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { EyeSlashSVG, EyeSVG, LogoSVG } from '../../components/svg';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Button, Input, Typography } from '../../elements';
import { useFirebase } from '../../hooks';

const SignUp: FC = () => {
  const { handleFirebaseConfig } = useFirebase();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onBlur',
  });

  useEffect(() => {
    handleFirebaseConfig();
  }, []);

  const onSubmit = async () => {
    const { email, password } = getValues();

    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        reset();
        toast.success('Sign up efectuado com sucesso.');
        console.log('User signed up successfully!');
      });
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error('Erro ao efectuar sign up');
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
          Crie uma conta e desfrute do melhor que temos para si
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Box pt="1rem">
          <Typography
            fontSize={['0.5rem', '1rem']}
            textAlign="left"
            py="0.5rem"
          >
            Nome completo
          </Typography>
          <Input
            width={['18rem', '30rem']}
            p={['0.5rem', 'L']}
            fontSize={['0.5rem', '1rem']}
            type="text"
            bg="transparent"
            outline="none"
            borderRadius="M"
            border="1px solid #E4E4E7"
            color="textInverted"
            placeholder="John Doe"
            nFocus={{
              border: '1px solid #4763E4',
            }}
            {...register('fullName', {
              required: 'Campo nome completo é obrigatório',
            })}
          />
          {errors.fullName && (
            <Typography className="alertDanger">
              {errors.fullName.message as string}
            </Typography>
          )}
        </Box>
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
          Criar conta &rarr;
        </Button>
      </form>
      <Box
        as="div"
        display="flex"
        fontSize={['0.5rem', '1rem']}
        justifyContent="center"
        alignItems="center"
      >
        <Typography p="0.5rem">Já tem uma conta?</Typography>
        <Link style={{ padding: '0.5rem' }} href={RoutePaths[RoutesEnum.Home]}>
          Entrar
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
