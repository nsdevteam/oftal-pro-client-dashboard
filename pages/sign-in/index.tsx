import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { Eye, EyeSlash } from '../../components/image-svg';
import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Typography, Button, Input } from '../../elements';

const Signin: FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

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
        <LogoSVG margin="0.5rem" />
        <Typography padding="0.5rem">
          Crie uma conta e desfrute do melhor que temos para si
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
              border="none"
              outline="none"
              borderRadius="M"
              borderSize="1px"
              borderStyle="solid"
              borderColor="#E4E4E7"
              mr={['NONE', 'S']}
              ml={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['30rem']}
              color="textInverted"
              placeholder="John Doe"
              focus={{
                borderColor: '#4763E4',
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
              Email
            </Typography>
            <Input
              p="L"
              type="email"
              bg="transparent"
              border="none"
              outline="none"
              borderRadius="M"
              borderSize="1px"
              borderStyle="solid"
              borderColor="#E4E4E7"
              color="textInverted"
              mr={['NONE', 'S']}
              ml={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['30rem']}
              placeholder="johndoe@oftalpro.com"
              focus={{
                borderColor: '#4763E4',
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
          <Typography padding="1rem" marginTop="1rem">
            Próximo passo
          </Typography>
          <Button
            p="L"
            type="submit"
            effect="hover"
            display="flex"
            disabled=""
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            width={['30rem', 'NONE']}
            borderRadius="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            minWidth={['100%', '10rem']}
            textTransform="uppercase"
            alignItems="center"
            onClick={() => router.push('/dashboard')}
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
          <Link padding="0.5rem" href={RoutePaths[RoutesEnum.Home]}>
            Entrar.{' '}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
