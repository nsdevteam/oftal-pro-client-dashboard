import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Attachment,
  Box,
  Dropdown,
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
                <Typography>Anexar Receita (Opcional)</Typography>
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
                <Input borderRadius="0.8rem" border="1px solid #CDCDCD" />
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Altura mínima</Typography>
                <Dropdown
                  values={['13', '15', '19', '21']}
                  label="Altura mínima"
                  onSelect={(value) => form.setValue('minimumHeight', value)}
                />
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Coloração</Typography>
                <Dropdown
                  label="Coloração"
                  values={['true', 'false']}
                  legend={{ true: 'Sim', false: 'Não' }}
                  onSelect={(value) =>
                    form.setValue('coloring', value as 'true' | 'false')
                  }
                />
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Prisma</Typography>
                <Dropdown
                  label="Prisma"
                  values={['true', 'false']}
                  legend={{ true: 'Sim', false: 'Não' }}
                  onSelect={(value) =>
                    form.setValue('prisma', value as 'true' | 'false')
                  }
                />
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Precal</Typography>
                <Dropdown
                  label="Precal"
                  values={['true', 'false']}
                  legend={{ true: 'Sim', false: 'Não' }}
                  onSelect={(value) =>
                    form.setValue('precal', value as 'true' | 'false')
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default OrderForm;
