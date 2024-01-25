import { FC, useId } from 'react';
import { v4 } from 'uuid';

import Box from '../box';
import Input from '../input';
import Typography from '../typography';
import { InputListProps } from './input-list.types';

const InputList: FC<InputListProps> = ({
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
        max={Number(values[0])}
        border="1px solid #CDCDCD"
        min={Number(values[values.length - 1])}
        cursor={disabled ? 'not-allowed' : 'pointer'}
        onBlur={(e) => {
          const value = Number(e.target.value);
          onSelect(value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2));
        }}
        defaultValue={Number(defaultValue ?? '0')}
      />
      <Box id={listId} as="datalist">
        {values.map((value) => (
          <option key={v4()} value={Number(value)}>
            {legend?.[value] ?? value}
          </option>
        ))}
      </Box>
    </Box>
  );
};

export default InputList;
