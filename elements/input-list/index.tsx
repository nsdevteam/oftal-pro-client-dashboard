import { FC, useId } from 'react';
import { v4 } from 'uuid';

import Box from '../box';
import Input from '../input';
import Typography from '../typography';
import { InputListProps } from './input-list.types';

const InputList: FC<InputListProps> = ({
  min,
  max,
  label,
  values,
  legend,
  disabled,
  onSelect,
  defaultValue,
}) => {
  const listId = useId();

  return (
    <Box as="label" position="relative" opacity={disabled ? 0.4 : 1}>
      <Typography fontSize="0.8rem">{label}</Typography>
      <Input
        step={0.25}
        type="number"
        list={listId}
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
        onBlur={(e) => {
          const value = Number(e.target.value);
          onSelect(value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2));
        }}
      />
      <Box id={listId} as="datalist">
        {values.map((value) => (
          <option key={v4()} value={legend?.[value] ?? value}>
            {legend?.[value] ?? value}
          </option>
        ))}
      </Box>
    </Box>
  );
};

export default InputList;
