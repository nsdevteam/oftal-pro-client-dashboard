import { FC } from 'react';

import Box from '../box';
import Input from '../input';
import Typography from '../typography';
import { InputListProps } from './input-list.types';

const InputList: FC<InputListProps> = ({
  min,
  max,
  label,
  values,
  disabled,
  onSelect,
  defaultValue,
}) => (
  <Box as="label" position="relative" opacity={disabled ? 0.4 : 1}>
    <Typography fontSize="0.8rem">{label}</Typography>
    <Input
      step={0.25}
      type="number"
      minWidth="6rem"
      disabled={disabled}
      borderRadius="0.8rem"
      border="1px solid #CDCDCD"
      max={max ?? Number(values[0])}
      {...(defaultValue && {
        defaultValue: Number(defaultValue.replace('+', '').replace(',', '.')),
      })}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      min={min ?? Number(values[values.length - 1])}
      onBlur={(e) => onSelect(e.target.value)}
    />
  </Box>
);

export default InputList;
