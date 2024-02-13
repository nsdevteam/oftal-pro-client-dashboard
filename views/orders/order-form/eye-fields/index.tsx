import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, InputList, Typography } from '../../../../elements';
import {
  ADDITION_VALUES,
  ADDITION_VALUES_LEGEND,
  AXIS_VALUES,
  AXIS_VALUES_LEGEND,
  CYLINDER_VALUES,
  CYLINDER_VALUES_LEGEND,
} from '../order-form.data';
import { EyeFieldsProps, IOrderForm } from '../order-form.types';
import EyeSpherical from './eye-spherical';

const EyeFields: FC<EyeFieldsProps> = ({ label, name }) => {
  const [isAddition, setAddition] = useState(true);
  const { control, setValue } = useFormContext<IOrderForm>();
  const eye = useWatch({ control, name: name });
  const type = useWatch({ control, name: 'type' });

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Box display="flex" gap="1rem" alignItems="flex-end">
        <Typography>{label}</Typography>
        {type !== 'single-focal' && (
          <Typography as="label" fontSize="0.8rem">
            <input
              type="checkbox"
              defaultChecked={!isAddition}
              onClick={() => setAddition(!isAddition)}
            />{' '}
            Longe e Perto
          </Typography>
        )}
      </Box>
      <Box
        gap="0.5rem"
        display="grid"
        alignItems="center"
        gridTemplateColumns={['1rem 1fr 1fr', '1rem 1fr 1fr 1fr 1fr']}
      >
        <input
          type="checkbox"
          defaultChecked={eye.active}
          onClick={() => setValue(name, { active: !eye.active })}
        />
        <EyeSpherical name={name} isAddition={isAddition} />
        <InputList
          label="Cilindro"
          disabled={!eye.active}
          values={CYLINDER_VALUES}
          legend={CYLINDER_VALUES_LEGEND}
          defaultValue={eye.cylinder?.replace('+', '').replace(',', '.')}
          onSelect={(value: string) => {
            const validValue = Number(value) - (Number(value) % 0.25);
            const isPositive = validValue > 0;

            setValue(
              `${name}.cylinder`,
              `${isPositive ? '+' : ''}${validValue.toFixed(2)}`
            );
          }}
        />
        <Box display={['block', 'none']} />
        <InputList
          label="Eixo"
          values={AXIS_VALUES}
          disabled={!eye.active}
          defaultValue={eye.axis}
          legend={AXIS_VALUES_LEGEND}
          onSelect={(value: string) => {
            setValue(
              `${name}.axis`,
              Number(value.slice(0, -1)) ? value : undefined
            );
          }}
        />
        {type !== 'single-focal' && isAddition && (
          <InputList
            label="Adição"
            disabled={!eye.active}
            values={ADDITION_VALUES}
            defaultValue={eye.addition}
            legend={ADDITION_VALUES_LEGEND}
            onSelect={(value: string) => {
              const validValue = Number(value) - (Number(value) % 0.25);

              setValue(`${name}.addition`, `+${validValue.toFixed(2)}`);
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default EyeFields;
