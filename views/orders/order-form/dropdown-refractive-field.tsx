import { FC, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import DropdownField from './dropdown-field';
import { REFRACTIVE_VALUES } from './order-form.data';
import { IOrderForm } from './order-form.types';

const DropdownRefractiveField: FC = () => {
  const { control, setValue } = useFormContext<IOrderForm>();
  const color = useWatch({ control, name: 'color' });
  const type = useWatch({ control, name: 'type' });

  useEffect(() => {
    setValue('refractiveIndex', undefined);
  }, [color, type]);

  return (
    <DropdownField
      name="refractiveIndex"
      label="Índice de refracção"
      disabled={!color || !type}
      values={Object.entries(REFRACTIVE_VALUES[color] ?? {})
        .filter(([, allowedList]) => allowedList.includes(type))
        .map(([value]) => value)}
    />
  );
};

export default DropdownRefractiveField;
