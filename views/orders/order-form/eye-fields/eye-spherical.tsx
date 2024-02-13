import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, InputList } from '../../../../elements';
import { SPHERICAL_VALUES, SPHERICAL_VALUES_LEGEND } from '../order-form.data';
import { IOrderForm } from '../order-form.types';

const EyeSpherical: FC<{
  isAddition: boolean;
  name: 'leftEye' | 'rightEye';
}> = ({ name, isAddition }) => {
  const { control, setValue } = useFormContext<IOrderForm>();

  const active = useWatch({ control, name: `${name}.active` });
  const addition = useWatch({ control, name: `${name}.addition` });
  const spherical = useWatch({ control, name: `${name}.spherical` });

  return (
    <Box display="flex" flexDirection="column" gap="0.5rem">
      <InputList
        disabled={!active}
        values={SPHERICAL_VALUES}
        defaultValue={spherical}
        legend={SPHERICAL_VALUES_LEGEND}
        label={`Esférico ${isAddition ? '' : '(longe)'}`}
        onSelect={(value: string) => {
          const validValue = Number(value) - (Number(value) % 0.25);
          const isPositive = validValue > 0;

          setValue(
            `${name}.spherical`,
            `${isPositive ? '+' : ''}${validValue.toFixed(2)}`
          );
        }}
      />
      {!isAddition && (
        <InputList
          disabled={!active}
          legend={SPHERICAL_VALUES_LEGEND}
          min={Number(spherical) + 0.5}
          max={Number(spherical) + 3.5}
          label={`Esférico ${isAddition ? '' : '(perto)'}`}
          defaultValue={String(
            Number(spherical?.replace('+', '').replace(',', '.')) +
              Number(addition?.replace('+', '').replace(',', '.'))
          )}
          values={SPHERICAL_VALUES.filter(
            (value) =>
              value >=
                Number(spherical?.replace('+', '').replace(',', '.')) + 0.5 &&
              value <=
                Number(spherical?.replace('+', '').replace(',', '.')) + 3.5
          )}
          onSelect={(value: string) => {
            const validValue = Number(value) - (Number(value) % 0.25);

            setValue(
              `${name}.addition`,
              `${Math.abs(Number(spherical) - validValue)}`
            );
          }}
        />
      )}
    </Box>
  );
};
export default EyeSpherical;
