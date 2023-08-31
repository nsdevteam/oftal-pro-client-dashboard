import Link from 'next/link';
import { FC, useState } from 'react';

import { Layout } from '../components';
import { Eye, EyeSlash } from '../components/image-svg';
import LogoSVG from '../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../constants/routes';
import { Box, Button, Input, Typography } from '../elements';

const Home: FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout pageTitle="Oftal Pro">
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
            onSubmit=""
            mt={['XL', 'XL', 'XL', 'NONE']}
            flexDirection="column"
            justifyContent="center"
          >
            <Box
              as="div"
              width="100%"
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Email
              </Typography>
            </Box>
            <Input
              p="L"
              type="email"
              bg="outline"
              border="none"
              outline="none"
              borderRadius="M"
              borderSize="1px"
              borderStyle="solid"
              borderColor="#E4E4E7"
              color="textInverted"
              width={500}
              backgroundColor="transparent"
              placeholder="johndoe@oftalpro.com"
              focus={{
                borderColor: 'focus',
              }}
            />
            <Box
              as="div"
              width="100%"
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Senha
              </Typography>
            </Box>
            <Box
              bg="outline"
              border="none"
              outline="none"
              mr={['NONE', 'S']}
              color="textInverted"
              width={500}
              backgroundColor="foreground"
              borderRadius="M"
              borderSize="1px"
              borderStyle="solid"
              borderColor="#E4E4E7"
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
                border="none"
                borderRadius="M"
                outline="none"
                backgroundColor="transparent"
                width={500}
                placeholder="***************"
                focus={{
                  borderColor: 'focus',
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
            <Box
              as="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Typography padding="0.5rem">Não tem uma conta?</Typography>
              <Link padding="0.5rem" href={RoutePaths[RoutesEnum.SignIn]}>
                Crie uma.{' '}
              </Link>
            </Box>
            <Button
              p="L"
              type="submit"
              effect="hover"
              display="flex"
              disabled=""
              variant="primary"
              fontWeight="bold"
              lineHeight="1.7rem"
              letterSpacing={1.09}
              color="#FFF"
              width={500}
              borderRadius="M"
              border="none"
              bg="#4763E4"
              justifyContent="center"
              minWidth={['100%', '10rem']}
              textTransform="uppercase"
              alignItems="center"
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
          >
            <Typography padding="0.5rem">Esqueceu a sua senha?</Typography>
            <Link padding="0.5rem" href={RoutePaths[RoutesEnum.ResetPassword]}>
              Solicitar uma nova senha.{' '}
            </Link>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
