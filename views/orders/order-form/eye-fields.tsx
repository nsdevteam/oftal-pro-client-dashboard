import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, Dropdown, Typography } from '../../../elements';
import {
  ADDITIONAL_VALUES,
  AXIS_VALUES,
  CYLINDER_VALUES,
  SPHERICAL_VALUES,
} from './order-form.data';
import { EyeFieldsProps, IOrderForm } from './order-form.types';

const EyeFields: FC<EyeFieldsProps> = ({ label, name }) => {
  const { control, setValue } = useFormContext<IOrderForm>();
  const eye = useWatch({ control, name: name });

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
        <Dropdown
          label="Esf."
          disabled={!eye.active}
          values={SPHERICAL_VALUES}
          defaultValue={eye.spherical}
          onSelect={(value: string) => {
            setValue(`${name}.spherical`, Number(value) ? value : undefined);
          }}
        />
        <Dropdown
          label="Cil."
          disabled={!eye.active}
          values={CYLINDER_VALUES}
          defaultValue={eye.cylinder}
          onSelect={(value: string) => {
            setValue(`${name}.cylinder`, Number(value) ? value : undefined);
          }}
        />
        {eye.cylinder && (
          <Dropdown
            label="Eix."
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
        <Dropdown
          label="Ad."
          disabled={!eye.active}
          values={ADDITIONAL_VALUES}
          defaultValue={eye.additional}
          onSelect={(value: string) => {
            setValue(`${name}.additional`, value);
          }}
        />
      </Box>
    </Box>
  );
};

export default EyeFields;
