import { FC } from 'react';
import colors from '../../design-system/common/primitive-colors';

import { Box, Typography, Input, Button, Table } from '../../elements';
import { Layout } from '../../components';
import {
  FiSearch,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { v4 } from 'uuid';
import { data } from '../../api';
import Link from 'next/link';
import { RoutesEnum } from '../../constants/routes';

const Request: FC = () => (
  <Layout pageTitle="Pedidos">
    <Box
      as="div"
      minWidth="100%"
      minHeight="100%"
      height="90vh"
      width="80vw"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="flex-start"
      padding="1rem"
    >
      <Typography padding="0.5rem">Pedidos</Typography>
      <Box as="div" width="100vw" padding="0.5rem">
        <Box
          bg="outline"
          border="none"
          outline="none"
          mr={['NONE', 'S']}
          color="textInverted"
          width="80%"
          backgroundColor="foreground"
          borderRadius="M"
          borderSize="1px"
          borderStyle="solid"
          borderColor="#E4E4E7"
          display="flex"
          flexWrap="nowrap"
          overflow="hidden"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Box cursor="pointer" padding="0.5rem" paddingRight="0">
            <FiSearch size={24} />
          </Box>
          <Input
            p="L"
            type="text"
            border="none"
            borderRadius="M"
            outline="none"
            backgroundColor="transparent"
            width={500}
            placeholder="Procurar por pedidos..."
          />
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
          width={150}
          borderRadius="M"
          marginTop="M"
          marginBottom="M"
          border="none"
          bg="#4763E4"
          justifyContent="center"
          minWidth={['100%', '10rem']}
          textTransform="uppercase"
          alignItems="center"
        >
          Novo pedido
          <FiPlus size={18} color="#FFF" />
        </Button>
      </Box>
      <Box as="div" width="80%" height="100%" padding="0.5rem">
        <Typography as="h2">Listagem de pedidos</Typography>
      </Box>
      <Box
        as="div"
        padding="0.5rem"
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box
          as="div"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box as="div" padding="0.5rem">
            <Typography as="p" color="#A1A1AA">
              100 pedidos
            </Typography>
          </Box>
          <Box as="div" padding="0.5rem">
            <Box
              as="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={30}
            >
              <Button
                p="0.8rem"
                type="submit"
                effect="hover"
                disabled=""
                display="flex"
                outline="none"
                width={10}
                height={10}
                variant="primary"
                color="#27272A"
                bg="transparent"
                marginTop="M"
                border="0.5px solid #E4E4E7"
                marginBottom="M"
                justifyContent="center"
                textTransform="uppercase"
                alignItems="center"
                active={{
                  background: '#4763E4',
                  color: '#FFF',
                }}
              >
                <Typography>
                  <FiChevronLeft size={16} color="#27272A" />
                </Typography>
              </Button>
              {[1, 2, 3, 4, 5, 6, , 7, 8, 9].map((pag) => {
                return (
                  <Button
                    p="0.8rem"
                    type="submit"
                    effect="hover"
                    display="flex"
                    disabled=""
                    outline="none"
                    width={10}
                    height={10}
                    variant="primary"
                    color="#27272A"
                    bg="transparent"
                    marginTop="M"
                    border="0.5px solid #E4E4E7"
                    marginBottom="M"
                    justifyContent="center"
                    textTransform="uppercase"
                    alignItems="center"
                    active={{
                      background: '#4763E4',
                      color: '#FFF',
                    }}
                  >
                    {pag}
                  </Button>
                );
              })}
              <Button
                p="0.8rem"
                type="submit"
                effect="hover"
                display="flex"
                disabled=""
                outline="none"
                width={10}
                height={10}
                variant="primary"
                color="#27272A"
                bg="transparent"
                marginTop="M"
                border="0.5px solid #E4E4E7"
                marginBottom="M"
                justifyContent="center"
                textTransform="uppercase"
                alignItems="center"
                active={{
                  background: '#4763E4',
                  color: '#FFF',
                }}
              >
                <Typography>
                  <FiChevronRight size={16} color="#27272A" />
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Request;
