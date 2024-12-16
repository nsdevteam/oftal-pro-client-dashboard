import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import invariant from 'tiny-invariant';

import addOrder from '../../../api/orders/add-order';
import updateOrder from '../../../api/orders/update-order';
import { useUser } from '../../../context/user';
import { Box, Button, Typography } from '../../../elements';
import { IOrder } from '../../../interface';
import { formatMoney } from '../../../utils';
import { TYPE_VALUES } from './order-form.data';
import { OrderFormSubmitProps } from './order-form.types';

const OrderFormSubmit: FC<OrderFormSubmitProps> = ({ doc, closeForm }) => {
  const { prices, userData } = useUser();
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext<IOrder>();

  const {
    leftEye,
    rightEye,
    treatment,
    refractiveIndex,
    color,
    coloring,
    type,
    precals,
    prisma,
    recipes,
  } = useWatch({ control });

  const typeIndex = TYPE_VALUES.findIndex((key) => key === type);

  const hasCylinderGreaterThan4 =
    (leftEye || rightEye) &&
    (leftEye?.cylinder || rightEye?.cylinder) &&
    (Number(leftEye?.cylinder ?? 0) > 4 ||
      Number(leftEye?.cylinder ?? 0) < -4 ||
      Number(rightEye?.cylinder ?? 0) > 4 ||
      Number(rightEye?.cylinder ?? 0) < -4);

  const total = prices
    ? ((prices.lens[color!]?.[refractiveIndex!]?.[typeIndex] ?? 0) +
        (hasCylinderGreaterThan4 ? prices.extra.cil : 0) +
        (recipes?.length ? prices.extra.receita : 0) +
        (precals?.length ? prices.extra.precal : 0) +
        (prisma ? prices.extra.prisma : 0) +
        (coloring
          ? prices.extra[
              `color_${refractiveIndex as '1.5' | '1.56' | '1.6' | '1.67'}`
            ] ?? 0
          : 0) +
        (prices.extra[treatment as keyof typeof prices.extra] ?? 0)) *
      ((leftEye?.active ? 1 : 0) + (rightEye?.active ? 1 : 0))
    : 0;

  const handleSubmit = async () => {
    const {
      ref,
      leftEye,
      rightEye,
      minimumHeight,
      refractiveIndex,
      treatment,
      color,
      type,
      ...others
    } = getValues();

    invariant(leftEye || rightEye, 'Deve preencher pelo menos 1 olho');
    invariant(minimumHeight, 'Deve ter altura mínima');
    invariant(refractiveIndex, 'Deve preencher o indice de refração');
    invariant(treatment, 'Deve preencher o tratamento');
    invariant(color, 'Deve preencher a cor das lentes');
    invariant(type, 'Deve preencher o tipo de lentes');

    console.log("Document Order Pending ::: ",doc);   
    //@ts-ignore   
    if (doc?.uid || doc?.id)
      return await updateOrder({
        ...others,
        ref,
        leftEye,
        rightEye,
        prisma,
        coloring,
        precals,
        recipes,
        minimumHeight,
        clientId: userData!.clientId,
        refractiveIndex,
        treatment,
        color,
        type,
        total,
        status: 1,
        //@ts-ignore
        uid: doc?.uid || doc?.id,      
        //@ts-ignore
        docId: doc?.uid || doc?.id,   
      });

    if (!userData?.type) return;

    await addOrder({
      ...others,
      ref,
      leftEye,
      rightEye,
      precals,
      recipes,
      minimumHeight,
      refractiveIndex,
      treatment,
      color,
      type,
      total,
      clientId: userData!.clientId,
    });
  };

  const onSubmit = () => {
    const errorsList = Object.values(errors);
    if (errorsList.length)
      return toast.error(`Preencha o formulário corretamente :: ${errorsList}`);

    toast.promise(handleSubmit(), {
      loading: `A ${doc?.uid ? 'atualizar' : 'submeter'} pedido...`,
      success: () => {
        closeForm();
        return `Pedido ${doc?.uid ? 'atualizado' : 'submetido'} com sucesso!`;
      },
      error: (e) =>
        e.message ?? `Erro ao ${doc?.uid ? 'atualizar' : 'submeter'} o pedido`,
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap="2rem">
      <Typography fontSize="1.5rem">
        Subtotal: {formatMoney(total)} AOA
      </Typography>
      <Box>
        {!doc?.uid && !userData?.type && (
          <Typography fontSize="0.75rem">Só depois do pagamento</Typography>
        )}
        {/*@ts-ignore*/}
        <Button onClick={onSubmit}>{(doc?.uid || doc?.id) ? 'Atualizar e Encomendar' : 'Adicionar ao Carrinho'}</Button>
      </Box>
    </Box>
  );
};

export default OrderFormSubmit;
