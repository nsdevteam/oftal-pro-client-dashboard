import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, InputList, Typography } from '../../../elements';
import {
  ADDITION_VALUES,
  ADDITION_VALUES_LEGEND,
  AXIS_VALUES,
  AXIS_VALUES_LEGEND,
  CYLINDER_VALUES,
  CYLINDER_VALUES_LEGEND,
  SPHERICAL_VALUES,
  SPHERICAL_VALUES_LEGEND,
} from './order-form.data';
import { EyeFieldsProps, IOrderForm } from './order-form.types';

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
        gridTemplateColumns="1rem 1fr 1fr 1fr 1fr"
      >
        <input
          type="checkbox"
          defaultChecked={eye.active}
          onClick={() => setValue(name, { active: !eye.active })}
        />
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <InputList
            disabled={!eye.active}
            values={SPHERICAL_VALUES}
            defaultValue={eye.spherical}
            legend={SPHERICAL_VALUES_LEGEND}
            label={`Esférico ${isAddition ? '' : '(longe)'}`}
            onSelect={(value: string) => {
              setValue(`${name}.spherical`, value ?? undefined);
            }}
          />
          {!isAddition && (
            <InputList
              disabled={!eye.active}
              legend={SPHERICAL_VALUES_LEGEND}
              min={Number(eye.spherical) + 0.5}
              max={Number(eye.spherical) + 3.5}
              label={`Esférico ${isAddition ? '' : '(perto)'}`}
              defaultValue={String(
                Number(eye.spherical?.replace('+', '').replace(',', '.')) +
                  Number(eye.addition?.replace('+', '').replace(',', '.'))
              )}
              values={SPHERICAL_VALUES.filter(
                (value) =>
                  value >=
                    Number(eye.spherical?.replace('+', '').replace(',', '.')) +
                      0.5 &&
                  value <=
                    Number(eye.spherical?.replace('+', '').replace(',', '.')) +
                      3.5
              )}
              onSelect={(value: string) => {
                setValue(
                  `${name}.addition`,
                  `${Math.abs(Number(eye.spherical) - Number(value))}`
                );
              }}
            />
          )}
        </Box>
        <InputList
          label="Cilindro"
          disabled={!eye.active}
          values={CYLINDER_VALUES}
          legend={CYLINDER_VALUES_LEGEND}
          defaultValue={eye.cylinder?.replace('+', '').replace(',', '.')}
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
            legend={AXIS_VALUES_LEGEND}
            onSelect={(value: string) => {
              setValue(
                `${name}.axis`,
                Number(value.slice(0, -1)) ? value : undefined
              );
            }}
          />
        )}
        {type !== 'single-focal' && isAddition && (
          <InputList
            label="Adição"
            disabled={!eye.active}
            values={ADDITION_VALUES}
            defaultValue={eye.addition}
            legend={ADDITION_VALUES_LEGEND}
            onSelect={(value: string) => {
              setValue(`${name}.addition`, value);
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default EyeFields;
