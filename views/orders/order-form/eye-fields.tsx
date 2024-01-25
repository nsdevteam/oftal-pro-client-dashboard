import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, InputList, Typography } from '../../../elements';
import {
  ADDITIONAL_VALUES,
  AXIS_VALUES,
  CYLINDER_VALUES,
  CYLINDER_VALUES_LEGEND,
  SPHERICAL_VALUES,
  SPHERICAL_VALUES_LEGEND,
} from './order-form.data';
import { EyeFieldsProps, IOrderForm } from './order-form.types';

const EyeFields: FC<EyeFieldsProps> = ({ label, name }) => {
  const { control, setValue } = useFormContext<IOrderForm>();
  const eye = useWatch({ control, name: name });
  const type = useWatch({ control, name: 'type' });

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Typography>{label}</Typography>
      <Box
        gap="0.5rem"
        display="grid"
        alignItems="center"
        gridTemplateColumns="1rem 1fr 1fr 1fr 1fr"
      >
        <input
          type="checkbox"
          checked={eye.active}
          onClick={() => setValue(name, { active: !eye.active })}
        />
        <InputList
          label="Esférico"
          disabled={!eye.active}
          values={SPHERICAL_VALUES}
          defaultValue={eye.spherical}
          legend={SPHERICAL_VALUES_LEGEND}
          onSelect={(value: string) => {
            setValue(`${name}.spherical`, Number(value) ? value : undefined);
          }}
        />
        <InputList
          label="Cilindro"
          disabled={!eye.active}
          values={CYLINDER_VALUES}
          defaultValue={eye.cylinder}
          legend={CYLINDER_VALUES_LEGEND}
          onSelect={(value: string) => {
            setValue(`${name}.cylinder`, Number(value) ? value : undefined);
          }}
        />
        {eye.cylinder && (
          <InputList
            label="Eixo"
            values={AXIS_VALUES}
            disabled={!eye.active}
            defaultValue={eye.axis}
            onSelect={(value: string) => {
              setValue(
                `${name}.axis`,
                Number(value.slice(0, -1)) ? value : undefined
              );
            }}
          />
        )}
        {type !== 'single-focal' && (
          <InputList
            label="Adicional"
            disabled={!eye.active}
            values={ADDITIONAL_VALUES}
            defaultValue={eye.additional}
            legend={CYLINDER_VALUES_LEGEND}
            onSelect={(value: string) => {
              setValue(`${name}.additional`, value);
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default EyeFields;
