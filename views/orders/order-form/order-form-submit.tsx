import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';

import addOrder from '../../../api/orders/add-order';
import { useUser } from '../../../context/user';
import { Box, Button, Typography } from '../../../elements';
import { formatMoney } from '../../../utils';
import { COLOR_VALUES, TYPE_VALUES } from './order-form.data';
import { IOrderForm } from './order-form.types';

const OrderFormSubmit: FC = () => {
  const { prices, userData } = useUser();
  const { control, getValues, formState } = useFormContext<IOrderForm>();

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
    recipe,
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
    ? (leftEye?.active
        ? prices.lens[`${colorIndex}:${refractiveIndex}`]?.[typeIndex] ?? 0
        : 0) +
      (rightEye?.active
        ? prices.lens[`${colorIndex}:${refractiveIndex}`]?.[typeIndex] ?? 0
        : 0) +
      (hasCylinderGreaterThan4 ? prices.extra.cil : 0) +
      (recipe?.length ? prices.extra.receita : 0) +
      (precal?.length ? prices.extra.precal : 0) +
      (prisma ? prices.extra.prisma : 0) +
      (coloring
        ? prices.extra[
            `color_${refractiveIndex as '1.5' | '1.56' | '1.6' | '1.67'}`
          ] ?? 0
        : 0) +
      (prices.extra[treatment as keyof typeof prices.extra] ?? 0)
    : 0;

  const handleSubmit = async () => {
    await addOrder({ ...getValues(), total, clientId: userData!.clientId });
  };

  const onSubmit = () => {
    if (!formState.isValid)
      return toast.error('Preencha o formulário correctamente');

    toast.promise(handleSubmit(), {
      loading: 'A submeter pedido...',
      success: 'Pedido submetido com sucesso!',
      error: 'Erro ao submeter o pedido',
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap="2rem">
      <Typography fontSize="1.5rem">
        Subtotal: {formatMoney(total)} AOA
      </Typography>
      <Button onClick={onSubmit}>Submeter</Button>
    </Box>
  );
};

export default OrderFormSubmit;
