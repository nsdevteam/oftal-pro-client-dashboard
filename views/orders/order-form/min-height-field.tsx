import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import DropdownField from './dropdown-field';
import { IOrderForm } from './order-form.types';

const MinimumHeightField: FC = () => {
  const { control, setValue } = useFormContext<IOrderForm>();
  const type = useWatch({ control, name: 'type' });

  if (['single-focal', 'bifocal'].includes(type)) {
    setValue('minimumHeight', '17');

    return null;
  }

  return (
    <DropdownField
      name="minimumHeight"
      label="Altura mín"
      values={['13', '15', '17', '19', '21']}
    />
  );
};

export default MinimumHeightField;
