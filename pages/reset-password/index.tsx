import Link from 'next/link';
import { FC } from 'react';

import LogoSVG from '../../components/svg/logo';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Button, Input, Typography } from '../../elements';
import { useFirebase, useFormInput } from '../../hooks';

const ResetPasswordPage: FC = () => {
  const { handleSubmit, register, errors, getValues } = useFormInput();
  const { handleUpdatePassword } = useFirebase();

  const onChangePassword = () => {
    const { email } = getValues();

    handleUpdatePassword(email!);
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
        <LogoSVG />
        <Typography padding="0.5rem">
          Insira o endereço de email de recuperação
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
              mt={['19rem', 'NONE']}
              ml={['0', 'NONE']}
            >
              <Typography className="alertDanger">
                {errors.email.message}
              </Typography>
            </Box>
          )}
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
            mt={['L', 'NONE']}
            mb={['L', 'NONE']}
            bg="#4763E4"
            justifyContent="center"
            minWidth={['100%', '10rem']}
            alignItems="center"
            onClick={handleSubmit(onChangePassword)}
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
          marginTop="1rem"
        >
          <Link href={RoutePaths[RoutesEnum.Home]}>
            Voltar para a página de login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
