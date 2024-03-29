import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { updateUser } from '../../api/user';
import { useUser } from '../../context/user';
import { Box, Button, Input, Typography } from '../../elements';

const Account: FC = () => {
  const { userData, userAuth } = useUser();
  const allNames = userData?.fullName.split(' ') ?? [''];
  const { register, getValues } = useForm({
    defaultValues: {
      firstName:
        allNames.length < 4 ? allNames[0] : allNames.slice(0, -2).join(' '),
      lastName:
        allNames.length < 3 ? allNames[1] ?? '' : allNames.slice(-2).join(' '),
      email: userData?.email ?? '',
      phone: userData?.phoneNumber ?? '',
      lastLoginAt: userData?.lastLoginAt
        ? new Date(userData.lastLoginAt)
        : '--',
      createdAt: userData?.createdAt ? new Date(userData.createdAt) : '--',
    },
  });

  const handleSubmit = () => {
    const { firstName, lastName, phone } = getValues();

    const fullName = `${firstName} ${lastName}`;

    updateUser(userAuth!.uid, {
      fullName,
      phoneNumber: phone,
    });
  };

  return (
    <Box
      as="div"
      maxWidth="100%"
      height="90vh"
      width="80vw"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="flex-start"
      padding="1rem"
    >
      <Typography padding="0.5rem">Dados do usuário</Typography>
      <Box as="div" width="80%" padding="0.5rem" marginTop="2rem">
        <Typography padding="1rem">Actualizar os seus dados</Typography>
        <Box
          as="form"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Box
            as="div"
            width="100vw"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              margin="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Primeiro nome
              </Typography>
              <Input
                p="L"
                type="text"
                outline="none"
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['30rem', 'NONE']}
                bg="transparent"
                placeholder="john"
                {...register('firstName')}
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
            <Box
              as="div"
              margin="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Sobrenome
              </Typography>
              <Input
                p="L"
                type="text"
                outline="none"
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                bg="transparent"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['30rem']}
                placeholder="Doe"
                {...register('lastName')}
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
          </Box>
          <Box
            as="div"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              margin="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Endereço de email
              </Typography>
              <Input
                p="L"
                type="email"
                outline="none"
                disabled
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['30rem']}
                bg="transparent"
                {...register('email')}
                placeholder="johndoe@oftalpro.com"
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
            <Box
              as="div"
              margin="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Número de telefone
              </Typography>
              <Input
                p="L"
                type="number"
                outline="none"
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['30rem']}
                bg="transparent"
                {...register('phone')}
                placeholder="(+244) 945 000 000"
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
          </Box>
          <Box
            as="div"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              margin="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Data de criação de conta
              </Typography>
              <Input
                p="L"
                type="date"
                outline="none"
                borderRadius="M"
                border="1px solid #E4E4E7"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                disabled
                minWidth={['100%', '10rem']}
                width={['30rem']}
                bg="transparent"
                placeholder="10-02-2019"
                {...register('createdAt')}
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
            <Box
              as="div"
              margin="0.5rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography textAlign="left" padding="0.5rem">
                Última data de login
              </Typography>
              <Input
                p="L"
                type="date"
                outline="none"
                borderRadius="M"
                border="1px solid #E4E4E7"
                marginLeft="0.5rem"
                color="textInverted"
                mr={['NONE', 'S']}
                ml={['NONE', 'S']}
                minWidth={['100%', '10rem']}
                width={['30rem']}
                bg="transparent"
                disabled
                {...register('lastLoginAt')}
                placeholder="20-03-2020"
                nFocus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
          </Box>
          <Button minWidth={['100%', '10rem']} onClick={handleSubmit}>
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
