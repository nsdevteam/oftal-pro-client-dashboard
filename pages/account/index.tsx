import Link from 'next/link';
import { FC } from 'react';

import { Layout } from '../../components';
import { RoutePaths, RoutesEnum } from '../../constants/routes';
import { Box, Button, Input, Typography } from '../../elements';

const Account: FC = () => (
  <Layout pageTitle="Oftal Pro">
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
          onSubmit=""
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
              width={500}
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
                bg="outline"
                border="none"
                outline="none"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                marginLeft="0.5rem"
                color="textInverted"
                width={490}
                backgroundColor="transparent"
                placeholder="john"
                focus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
            <Box
              as="div"
              width={500}
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
                bg="outline"
                border="none"
                outline="none"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                marginLeft="0.5rem"
                color="textInverted"
                width={490}
                backgroundColor="transparent"
                placeholder="Doe"
                focus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
          </Box>
          <Box
            as="div"
            width="100vw"
            display="flex"
            gap="1rem"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              width={500}
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
                bg="outline"
                border="none"
                outline="none"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                marginLeft="0.5rem"
                color="textInverted"
                width={490}
                backgroundColor="transparent"
                placeholder="johndoe@oftalpro.com"
                focus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
            <Box
              as="div"
              width={500}
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
                bg="outline"
                border="none"
                outline="none"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                marginLeft="0.5rem"
                color="textInverted"
                width={490}
                backgroundColor="transparent"
                placeholder="(+244) 945 000 000"
                focus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
          </Box>
          <Box
            as="div"
            width="100vw"
            display="flex"
            gap="1rem"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box
              as="div"
              width={500}
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
                bg="outline"
                border="none"
                outline="none"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                marginLeft="0.5rem"
                color="textInverted"
                width={490}
                backgroundColor="transparent"
                placeholder="10-02-2019"
                focus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
            <Box
              as="div"
              width={500}
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
                bg="outline"
                border="none"
                outline="none"
                borderRadius="M"
                borderSize="1px"
                borderStyle="solid"
                borderColor="#E4E4E7"
                marginLeft="0.5rem"
                color="textInverted"
                width={490}
                backgroundColor="transparent"
                placeholder="20-03-2020"
                focus={{
                  borderColor: '#4763E4',
                }}
              />
            </Box>
          </Box>
          <Button
            p="L"
            type="submit"
            effect="hover"
            display="flex"
            disabled=""
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            width={100}
            borderRadius="M"
            border="none"
            bg="#4763E4"
            marginLeft="1rem"
            marginTop="2rem"
            justifyContent="center"
            minWidth={['100%', '10rem']}
            textTransform="uppercase"
            alignItems="center"
          >
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Account;
