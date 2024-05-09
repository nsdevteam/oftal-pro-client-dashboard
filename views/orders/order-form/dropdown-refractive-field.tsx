import { FC, useEffect, useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { IOrder } from '../../../interface';
import DropdownField from './dropdown-field';
import { REFRACTIVE_VALUES } from './order-form.data';

const DropdownRefractiveField: FC<{ disabled: boolean }> = ({ disabled }) => {
  const ref = useRef(0);
  const { control, setValue } = useFormContext<IOrder>();
  const color = useWatch({ control, name: 'color' });
  const type = useWatch({ control, name: 'type' });

  useEffect(() => {
    const isMoreThanSecondRender = ref.current > 1;
    if (isMoreThanSecondRender) setValue('refractiveIndex', undefined);
    else ref.current++;
  }, [color, type]);

  return (
    <DropdownField
      name="refractiveIndex"
      label="Índice de refracção"
      disabled={disabled || !color || !type}
      values={Object.entries(REFRACTIVE_VALUES[color] ?? {})
        .filter(([, allowedList]) => allowedList.includes(type))
        .map(([value]) => value)}
    />
  );
};

export default DropdownRefractiveField;
