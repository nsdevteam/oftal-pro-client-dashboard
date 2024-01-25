import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, Dropdown, Typography } from '../../../elements';
import { DropdownFieldProps, IOrderForm } from './order-form.types';

const DropdownField: FC<DropdownFieldProps> = ({ label, name, ...props }) => {
  const { control, setValue } = useFormContext<IOrderForm>();

  const fieldValue = useWatch({ control, name });

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Typography>{label}</Typography>
      <Dropdown
        {...props}
        defaultValue={fieldValue}
        onSelect={(value: string) => {
          setValue(name, value);
        }}
      />
    </Box>
  );
};

export default DropdownField;
