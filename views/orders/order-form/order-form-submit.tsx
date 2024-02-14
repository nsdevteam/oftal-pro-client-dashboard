import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useUser } from '../../../context/user';
import { Box, Button, Typography } from '../../../elements';
import { formatMoney } from '../../../utils';
import { COLOR_VALUES, TYPE_VALUES } from './order-form.data';
import { IOrderForm } from './order-form.types';

const OrderFormSubmit: FC = () => {
  const { prices } = useUser();
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

  const total = prices
    ? (prices.lens[`${colorIndex}:${refractiveIndex}`]?.[typeIndex] ?? 0) +
      (prices.lens[`${colorIndex}:${refractiveIndex}`]?.[typeIndex] ?? 0) +
      (hasCylinderGreaterThan4 ? prices.extra.cil : 0) +
      (precal ? prices.extra.precal : 0) +
      (prisma ? prices.extra.prisma : 0) +
      (coloring
        ? prices.extra[
            `color_${refractiveIndex as '1.5' | '1.56' | '1.6' | '1.67'}`
          ] ?? 0
        : 0) +
      (prices.extra[treatment as keyof typeof prices.extra] ?? 0)
    : 0;

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
