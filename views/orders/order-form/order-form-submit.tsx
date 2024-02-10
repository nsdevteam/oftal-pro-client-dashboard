import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box, Button, Typography } from '../../../elements';
import { formatMoney } from '../../../utils';
import {
  BASE_PRICE,
  COLOR_VALUES,
  EXTRA_PRICE,
  TYPE_VALUES,
} from './order-form.data';
import { IOrderForm } from './order-form.types';

const OrderFormSubmit: FC = () => {
  const { control } = useFormContext<IOrderForm>();

  const {
    leftEye,
    rightEye,
    treatment,
    refractiveIndex,
    color,
    coloring,
    type,
    precal,
    prisma,
  } = useWatch({ control });

  const colorIndex = COLOR_VALUES.findIndex((key) => key === color);

  const typeIndex = TYPE_VALUES.findIndex((key) => key === type);

  const hasCylinderGreaterThan4 =
    (leftEye || rightEye) &&
    (leftEye?.cylinder || rightEye?.cylinder) &&
    (Number(leftEye?.cylinder ?? 0) > 4 ||
      Number(leftEye?.cylinder ?? 0) < -4 ||
      Number(rightEye?.cylinder ?? 0) > 4 ||
      Number(rightEye?.cylinder ?? 0) < -4);

  const total =
    (BASE_PRICE[`${colorIndex}:${refractiveIndex}`]?.[typeIndex] ?? 0) +
    (BASE_PRICE[`${colorIndex}:${refractiveIndex}`]?.[typeIndex] ?? 0) +
    (hasCylinderGreaterThan4 ? EXTRA_PRICE.cil : 0) +
    (precal ? EXTRA_PRICE.precal : 0) +
    (prisma ? EXTRA_PRICE.prisma : 0) +
    (coloring
      ? EXTRA_PRICE[
          `color_${refractiveIndex as '1.5' | '1.56' | '1.6' | '1.67'}`
        ] ?? 0
      : 0) +
    (EXTRA_PRICE[treatment as keyof typeof EXTRA_PRICE] ?? 0);

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap="2rem">
      <Typography fontSize="1.5rem">
        Subtotal: {formatMoney(total)} AOA
      </Typography>
      <Button>Prosseguir</Button>
    </Box>
  );
};

export default OrderFormSubmit;
