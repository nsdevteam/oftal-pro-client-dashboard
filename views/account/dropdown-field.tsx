import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, Dropdown, Typography } from '../../elements';
import { IClient } from '../../interface';
import { DropdownFieldProps } from './account.types';

const DropdownField: FC<DropdownFieldProps> = ({ name, label, ...props }) => {
  const { control, setValue } = useFormContext<IClient>();

  const fieldValue = useWatch({ control, name });

  return (
    <Box display="flex" flexDirection="column" gap="0.5rem" py="1rem">
      <Typography fontSize="0.9rem">{label}</Typography>
      <Dropdown
        {...props}
        defaultValue={String(fieldValue ?? '')}
        onSelect={(value: string) => {
          setValue(name, value);
        }}
      />
    </Box>
  );
};

export default DropdownField;
