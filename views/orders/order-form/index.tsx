import { ChangeEvent, FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Attachment,
  Box,
  Input,
  Textarea,
  Typography,
} from '../../../elements';
import { IOrder } from '../../../interface';
import DropdownField from './dropdown-field';
import DropdownRefractiveField from './dropdown-refractive-field';
import Eyes from './eye-fields';
import MinimumHeightField from './min-height-field';
import {
  COLOR_LEGEND,
  COLOR_VALUES,
  TYPE_LEGEND,
  TYPE_VALUES,
} from './order-form.data';
import { OrderFormProps } from './order-form.types';
import OrderFormSubmit from './order-form-submit';
import TreatmentDropdownField from './treatment-dropdown-field';
import { downloadFirebaseFile } from '../../../utils/helpers';

const OrderForm: FC<OrderFormProps> = ({ closeForm, doc, isEditable }) => {
  const form = useForm<IOrder>({
    defaultValues: {
      diameter: 70,
      prisma: false,
      coloring: false,
      treatment: 'HMC',
      minimumHeight: '17',
      leftEye: { active: true },
      rightEye: { active: true },
      ...doc,
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
        className='order-form'
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
          zIndex={20}   
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
          className='order-form-content'
        >
          <Typography
          className='page-title'
          mt={"20px"}
          >
            {!isEditable ? 'Visualizer' : doc ? 'Atualizar' : 'Novo'} Pedido
          </Typography>
          <Box
            display="grid"
            rowGap="1.25rem"
            columnGap="2rem"
            alignItems="start"
            gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
          >
            <Box
              display="grid"
              rowGap="1.25rem"
              columnGap="2rem"
              gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
            >
              <Box gridColumn="2 span">
                <DropdownField
                  label="Tipo"
                  name="type"
                  values={TYPE_VALUES}
                  legend={TYPE_LEGEND}
                  disabled={!isEditable}
                />
              </Box>
              <Box gridColumn="2 span">
                <TreatmentDropdownField disabled={!isEditable} />
              </Box>
              <Box gridColumn="2 span">
                <DropdownField
                  label="Cor"
                  name="color"
                  values={COLOR_VALUES}
                  legend={COLOR_LEGEND}
                  disabled={!isEditable}
                />
              </Box>
              <Box gridColumn="2 span">
                <DropdownRefractiveField disabled={!isEditable} />
              </Box>
            </Box>
            <Eyes disabled={!isEditable} />
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
                  className='c-input'
                  borderRadius="0.8rem"
                  disabled={!isEditable}
                  border="1px solid #CDCDCD"
                  {...form.register('diameter', {
                    onBlur: (e) => {
                      const numericValue = Number(e.target.value);
                      form.setValue(
                        'diameter',
                        numericValue > 80
                          ? 80
                          : numericValue < 50
                          ? 50
                          : numericValue
                      );
                    },
                  })}
                />
              </Box>
              <DropdownField
                isBoolean
                name="coloring"
                label="Coloração"
                disabled={!isEditable}
                values={['true', 'false']}
                legend={{ true: 'Sim', false: 'Não' }}
                allowed={['refractiveIndex', ['1.5', '1.56', '1.6', '1.67']]}
              />
              <DropdownField
                isBoolean
                name="prisma"
                label="Prisma"
                disabled={!isEditable}
                values={['true', 'false']}
                legend={{ true: 'Sim', false: 'Não' }}
              />
              <MinimumHeightField disabled={!isEditable} />
            </Box>
            <Box display="flex" gap="1.25rem" flexDirection="column">
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Nome do paciente/Referência</Typography>
                <Input
                  borderRadius="0.8rem"
                  disabled={!isEditable}
                  className='c-input'
                  border="1px solid #CDCDCD"
                  placeholder="Firmino Miguel"
                  {...form.register('ref', {
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                      form.setValue('ref', e.target?.value.slice(0, 30));
                    },
                  })}
                />
              </Box>
              <Box display="grid" gridTemplateColumns="1fr 1fr">
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Typography>
                    Anexar Receita (Opcional com acréscimo)
                  </Typography>
                  <Attachment
                    disabled={!isEditable}
                    label="Adicionar ficheiro"
                    files={form.getValues('recipes')}
                    onChange={(files) => form.setValue('recipes', files)}
                  />
                  {/*@ts-ignore*/}
                  {doc?.recipe?.length > 0 && <button onClick={()=>downloadFirebaseFile(doc?.recipe || '')} className='c-download-file-btn'><span className='link'>Descarregar <span className='icon'></span></span></button>}
                </Box>
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Typography>
                    Anexar Precal (Opcional com acréscimo)
                  </Typography>
                  <Attachment
                    disabled={!isEditable}
                    label="Adicionar ficheiro"
                    files={form.getValues('precals')}
                    onChange={(files) => form.setValue('precals', files)}
                  />
                    {/*@ts-ignore*/}   
                    {doc?.precal?.length > 0 && <button onClick={()=>downloadFirebaseFile(doc?.precal || '')} className='c-download-file-btn'><span className='link'>Descarregar <span className='icon'></span></span></button>}
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Typography>Observações</Typography>
                <Textarea
                  disabled={!isEditable}
                  onChange={(e) => form.setValue('observation', e.target.value)}
                />
              </Box>
              {isEditable && (
                <Box gridColumn="1/-1">
                  <OrderFormSubmit doc={doc} closeForm={closeForm} />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default OrderForm;
