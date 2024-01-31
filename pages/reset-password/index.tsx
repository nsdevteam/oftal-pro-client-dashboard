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
          Insira o email endereço de recuperação
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onChangePassword)}>
        <Box pt="1rem">
          <Typography
            fontSize={['0.5rem', '1rem']}
            textAlign="left"
            py="0.5rem"
          >
            Endereço de email
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
        <Button>Prosseguir &rarr;</Button>
      </form>
      <Box
        as="div"
        display="flex"
        fontSize={['0.5rem', '1rem']}
        justifyContent="center"
        alignItems="center"
      >
        <Link href={RoutePaths[RoutesEnum.Home]}>
          Voltar para a página de login.
        </Link>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
