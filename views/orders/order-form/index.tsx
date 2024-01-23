import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Attachment, Box, Input, Typography } from '../../../elements';
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
          borderRadius="1rem"
          flexDirection="column"
          onClick={(e) => e.stopPropagation()}
        >
          <Typography>Novo Pedido</Typography>
          <Typography>Refração</Typography>
          <Box
            display="grid"
            rowGap="1.25rem"
            columnGap="2rem"
            gridTemplateColumns="2fr 1fr 1fr"
          >
            <EyeFields label="Olho Direito" name="rightEye" />
            <DropdownField
              name="treatment"
              label="Tratamento"
              values={TREATMENT_VALUES}
            />
            <DropdownField
              label="Tipo"
              name="type"
              values={TYPE_VALUES}
              legend={TYPE_LEGEND}
            />
            <EyeFields label="Olho Esquerdo" name="leftEye" />
            <DropdownField
              label="Cor"
              name="color"
              values={COLOR_VALUES}
              legend={COLOR_LEGEND}
            />
            <DropdownRefractiveField />
            <Box display="flex" flexDirection="column" gap="1rem">
              <Typography>Nome do paciente/Referência</Typography>
              <Input
                borderRadius="0.8rem"
                border="1px solid #CDCDCD"
                placeholder="Firmino Miguel"
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Typography>Tempo de lente</Typography>
              <Input borderRadius="0.8rem" border="1px solid #CDCDCD" />
            </Box>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Typography>Anexar Receita</Typography>
              <Attachment
                label="Receita (Opcional)"
                files={[] as unknown as FileList}
                onChange={() => {
                  console.log();
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default OrderForm;
