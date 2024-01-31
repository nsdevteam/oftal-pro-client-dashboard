import { FC } from 'react';
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
  TREATMENT_VALUES,
  TYPE_LEGEND,
  TYPE_VALUES,
} from './order-form.data';
import { IOrderForm, OrderFormProps } from './order-form.types';
import OrderFormSubmit from './order-form-submit';

const OrderForm: FC<OrderFormProps> = ({ closeForm }) => {
  const form = useForm<IOrderForm>({
    defaultValues: {
      rightEye: { active: true },
      leftEye: { active: true },
    },
  });

  return (
    <FormProvider {...form}>
      <Box
        inset="0"
        p="2rem"
        bg="#0003"
        display="flex"
        position="fixed"
        onClick={closeForm}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          py="XL"
          px="4rem"
          bg="#fff"
          gap="3rem"
          width="100%"
          height="100%"
          display="flex"
          overflowY="auto"
          borderRadius="1rem"
          flexDirection="column"
          onClick={(e) => e.stopPropagation()}
        >
          <Typography>Novo Pedido</Typography>
          <Typography>Refracção</Typography>
          <Box
            display="grid"
            rowGap="1.25rem"
            columnGap="2rem"
            alignItems="start"
            gridTemplateColumns="1fr 1fr"
          >
            <Box display="flex" gap="1.25rem" flexDirection="column">
              <EyeFields label="Olho Direito" name="rightEye" />
              <EyeFields label="Olho Esquerdo" name="leftEye" />
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Nome do paciente/Referência</Typography>
                <Input
                  borderRadius="0.8rem"
                  border="1px solid #CDCDCD"
                  placeholder="Firmino Miguel"
                />
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Anexar Receita (Opcional com acréscimo)</Typography>
                <Attachment
                  label="Adicionar ficheiro"
                  files={[] as unknown as FileList}
                  onChange={() => {
                    console.log();
                  }}
                />
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
              gridTemplateColumns="1fr 1fr 1fr 1fr"
            >
              <Box gridColumn="2 span">
                <DropdownField
                  name="treatment"
                  label="Tratamento"
                  values={TREATMENT_VALUES}
                />
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
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Diâmetro</Typography>
                <Input
                  borderRadius="0.8rem"
                  border="1px solid #CDCDCD"
                  {...form.register('diameter')}
                />
              </Box>
              <DropdownField
                name="minimumHeight"
                label="Altura mínima"
                values={['13', '15', '19', '21']}
              />
              <DropdownField
                isBoolean
                name="coloring"
                label="Coloração"
                values={['true', 'false']}
                legend={{ true: 'Sim', false: 'Não' }}
              />
              <DropdownField
                isBoolean
                name="prisma"
                label="Prisma"
                values={['true', 'false']}
                legend={{ true: 'Sim', false: 'Não' }}
              />
              <DropdownField
                isBoolean
                name="precal"
                label="Precal"
                values={['true', 'false']}
                legend={{ true: 'Sim', false: 'Não' }}
              />
            </Box>
          </Box>
          <OrderFormSubmit />
        </Box>
      </Box>
    </FormProvider>
  );
};

export default OrderForm;
