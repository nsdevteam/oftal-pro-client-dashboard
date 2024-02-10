import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Attachment,
  Box,
  Input,
  Textarea,
  Typography,
} from '../../../elements';
import DropdownField from './dropdown-field';
import DropdownRefractiveField from './dropdown-refractive-field';
import EyeFields from './eye-fields';
import {
  COLOR_LEGEND,
  COLOR_VALUES,
  TYPE_LEGEND,
  TYPE_VALUES,
} from './order-form.data';
import { IOrderForm, OrderFormProps } from './order-form.types';
import OrderFormSubmit from './order-form-submit';
import TreatmentDropdownField from './treatment-dropdown-field';

const OrderForm: FC<OrderFormProps> = ({ closeForm }) => {
  const [precal, setPrecal] = useState<FileList>();
  const [attachment, setAttachment] = useState<FileList>();

  const form = useForm<IOrderForm>({
    defaultValues: {
      rightEye: { active: true },
      leftEye: { active: true },
      diameter: 70,
      prisma: false,
      coloring: false,
      treatment: 'HMC',
      minimumHeight: '17',
    },
  });

  return (
    <FormProvider {...form}>
      <Box
        inset="0"
        bg="#0003"
        display="flex"
        position="fixed"
        onClick={closeForm}
        alignItems="center"
        p={['1rem', '2rem']}
        justifyContent="center"
      >
        <Box
          bg="white"
          top="2.5rem"
          width="3rem"
          height="3rem"
          right="3.5rem"
          display="flex"
          cursor="pointer"
          position="absolute"
          alignItems="center"
          onClick={closeForm}
          borderRadius="0.5rem"
          alignSelf="flex-start"
          justifyContent="center"
          border="1px solid #0002"
          nHover={{ borderColor: '#0005' }}
        >
          <Box fontSize="2rem" transform="scaleY(0.8)">
            X
          </Box>
        </Box>
        <Box
          py="XL"
          bg="#fff"
          gap="3rem"
          width="100%"
          height="100%"
          display="flex"
          overflowY="auto"
          borderRadius="1rem"
          flexDirection="column"
          px={['1rem', '1rem', '4rem']}
          onClick={(e) => e.stopPropagation()}
        >
          <Typography>Novo Pedido</Typography>
          <Typography>Refracção</Typography>
          <Box
            display="grid"
            rowGap="1.25rem"
            columnGap="2rem"
            alignItems="start"
            gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
          >
            <Box display="flex" gap="1.25rem" flexDirection="column">
              <EyeFields label="Olho Direito" name="rightEye" />
              <EyeFields label="Olho Esquerdo" name="leftEye" />
            </Box>
            <Box
              display="grid"
              rowGap="1.25rem"
              columnGap="2rem"
              gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
            >
              <Box gridColumn="2 span">
                <TreatmentDropdownField />
              </Box>
              <Box gridColumn="2 span">
                <DropdownField
                  label="Tipo"
                  name="type"
                  values={TYPE_VALUES}
                  legend={TYPE_LEGEND}
                />
              </Box>
              <Box gridColumn="2 span">
                <DropdownField
                  label="Cor"
                  name="color"
                  values={COLOR_VALUES}
                  legend={COLOR_LEGEND}
                />
              </Box>
              <Box gridColumn="2 span">
                <DropdownRefractiveField />
              </Box>
            </Box>
            <Box display="flex" gap="1.25rem" flexDirection="column">
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Nome do paciente/Referência</Typography>
                <Input
                  borderRadius="0.8rem"
                  border="1px solid #CDCDCD"
                  placeholder="Firmino Miguel"
                />
              </Box>
              <Box display="grid" gridTemplateColumns="1fr 1fr">
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Typography>
                    Anexar Receita (Opcional com acréscimo)
                  </Typography>
                  <Attachment
                    files={attachment}
                    label="Adicionar ficheiro"
                    onChange={(files) => {
                      setAttachment(files);
                    }}
                  />
                </Box>
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Typography>
                    Anexar Precal (Opcional com acréscimo)
                  </Typography>
                  <Attachment
                    files={precal}
                    label="Adicionar ficheiro"
                    onChange={(files) => {
                      setPrecal(files);
                    }}
                  />
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Observações</Typography>
                <Textarea />
              </Box>
            </Box>
            <Box
              display="grid"
              rowGap="1.25rem"
              columnGap="2rem"
              gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
            >
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Diâmetro</Typography>
                <Input
                  min="50"
                  max="80"
                  type="number"
                  borderRadius="0.8rem"
                  border="1px solid #CDCDCD"
                  {...form.register('diameter')}
                />
              </Box>
              <DropdownField
                name="minimumHeight"
                label="Altura mín"
                values={['13', '15', '17', '19', '21']}
              />
              <DropdownField
                isBoolean
                name="coloring"
                label="Coloração"
                values={['true', 'false']}
                legend={{ true: 'Sim', false: 'Não' }}
                allowed={['refractiveIndex', ['1.5', '1.56', '1.6', '1.67']]}
              />
              <DropdownField
                isBoolean
                name="prisma"
                label="Prisma"
                values={['true', 'false']}
                legend={{ true: 'Sim', false: 'Não' }}
              />
              <Box gridColumn="1/-1" mt={['1rem', '7rem']}>
                <OrderFormSubmit />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default OrderForm;
