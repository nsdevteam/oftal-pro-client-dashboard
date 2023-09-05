import Link from 'next/link';
import { FC, useState } from 'react';

import { Layout } from '../components';
import { Eye, EyeSlash } from '../../components/image-svg';
import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Typography, Button, Input } from '../../elements';

const Signin: FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography textAlign="left" padding="0.5rem">
              Nome completo
            </Typography>
          </Box>
          <Input
            p="L"
            type="text"
            bg="outline"
            border="none"
            outline="none"
            borderRadius="M"
            borderSize="1px"
            borderStyle="solid"
            borderColor="#E4E4E7"
            mr={['NONE', 'S']}
            color="textInverted"
            width={500}
            backgroundColor="transparent"
            placeholder="John Doe"
            focus={{
              borderColor: '#4763E4',
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
            mr={['NONE', 'S']}
            color="textInverted"
            width={500}
            backgroundColor="transparent"
            placeholder="johndoe@oftalpro.com"
            focus={{
              borderColor: '#4763E4',
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
            width={500}
            borderRadius="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            minWidth={['100%', '10rem']}
            textTransform="uppercase"
            alignItems="center"
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
