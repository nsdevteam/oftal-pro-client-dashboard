import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { Layout } from '../components';
import { Eye, EyeSlash } from '../components/image-svg';
import LogoSVG from '../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../constants/routes';
import { Box, Button, Input, Typography } from '../elements';

const Home: FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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
          <LogoSVG margin="0.5rem" />
          <Typography padding="0.5rem">
            Insira os seus dados e clique em entrar
          </Typography>
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
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['30rem']}
                bg="outline"
                border="none"
                outline="none"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                color="textInverted"
                bg="transparent"
                placeholder="johndoe@oftalpro.com"
                focus={{
                  borderColor: '#4763E4',
                  borderSize: '1px',
                  borderStyle: 'solid',
                }}
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
                Senha
              </Typography>
              <Box
                border="none"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['30rem']}
                color="textInverted"
                backgroundColor="foreground"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                bg="transparent"
                display="flex"
                flexWrap="nowrap"
                overflow="hidden"
                alignItems="center"
                justifyContent="sstretch"
              >
                <Input
                  p="L"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  bg="transparent"
                  border="none"
                  borderRadius="M"
                  outline="none"
                  backgroundColor="transparent"
                  minWidth={['100%', '10rem']}
                  width={['50rem']}
                  placeholder="***************"
                  focus={{
                    borderColor: '#4763E4',
                    borderSize: '1px',
                    borderStyle: 'solid',
                  }}
                />
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
              <Link padding="0.5rem" href={RoutePaths[RoutesEnum.SignIn]}>
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
              textTransform="uppercase"
              alignItems="center"
              onClick={() => router.push('/request')}
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
            <Link padding="0.5rem" href={RoutePaths[RoutesEnum.ResetPassword]}>
              Solicitar uma nova senha.{' '}
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
