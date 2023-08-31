import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Button, Input, Typography } from '../../elements';

const ResetPassword: FC = () => {
  const { push } = useRouter();
  const handleNavigation = () => {
    push(RoutePaths[RoutesEnum.ResetPasswordNotification]);
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
          Insira o endereço de email de recuperação
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
              Endereço de Email
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
              borderColor: 'focus',
            }}
          />
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
            mt={['L', 'NONE']}
            mb={['L', 'NONE']}
            bg="#4763E4"
            justifyContent="center"
            minWidth={['100%', '10rem']}
            textTransform="uppercase"
            alignItems="center"
            onClick={handleNavigation}
          >
            Prosseguir &rarr;
          </Button>
        </Box>
        <Box
          as="div"
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Link padding="0.5rem" href={RoutePaths[RoutesEnum.Home]}>
            Voltar para a página de login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
