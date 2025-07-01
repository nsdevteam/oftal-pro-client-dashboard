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

const OrderFormSubmit: FC<OrderFormSubmitProps> = ({ doc, closeForm, requestPayment }) => {
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



  const handleSubmit = async (paymentProcedure?: 0 | 1) => {
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

    //Updates Order Only and Requests Payment [Payment will be provided a callback in backend to update status of payment and order status]
    //@ts-ignore   
    if (doc?.status === 0)
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
        ...((paymentProcedure === 1) && { status: 1 }),//Client requests payment after order
        uid: userData?.id,
        docId: doc?.id || ""
      });

    if (!userData?.type) return;


    //Creates new order
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

  const onSubmit = (paymentProcedure?: 0 | 1) => {
    const errorsList = Object.values(errors);
    if (errorsList.length)
      return toast.error(`Preencha o formulário corretamente :: ${errorsList}`);

    if (paymentProcedure === 1 || (!paymentProcedure && paymentProcedure !== 0)) {
      toast.promise(handleSubmit(paymentProcedure), {
        loading: `A ${doc?.uid ? 'atualizar' : 'submeter'} pedido...`,
        success: () => {
          closeForm();
          return `Pedido ${doc?.uid ? 'atualizado' : 'submetido'} com sucesso!`;
        },
        error: (e) =>
          e.message ?? `Erro ao ${doc?.uid ? 'atualizar' : 'submeter'} o pedido`,
      });
    } else {
      handleSubmit(paymentProcedure).then((res) => {
        console.log("Response In Submit :: ",res);  
        //Request Payment Before Updating Status to 'Ordered' (Backend Callback Task)
        requestPayment && requestPayment(doc?.uid || "", doc?.total || 0);
      }).catch((error)=>{
        console.error("Failed to request payment before order ::: ",error);
      })
    }

  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap="2rem">
      <Typography fontSize="1.5rem">
        Subtotal: {formatMoney(total)} AOA
      </Typography>
      <Box display={"flex"} gap={15}>
        {!doc?.status && doc?.status !== 0 && <Button onClick={() => onSubmit()}>Adicionar ao Carrinho</Button>}
        {doc?.status === 0 && <Button onClick={() => onSubmit(0)}>Pagar Agora e Encomendar </Button>}
        {doc?.status === 0 && <Button onClick={() => onSubmit(1)}>Encomendar e Pagar Depois</Button>}
      </Box>
    </Box>
  );
};

export default OrderFormSubmit;
