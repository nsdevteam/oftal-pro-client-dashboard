import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Layout } from '../components';
import { IOrder, orderStatusEnum } from '../interface';
import Orders from '../views/orders';

const OrdersPage: FC = () => {
  const form = useForm<IOrder>({
    defaultValues: {
      color: 'white',
    },
  });

  return (
    <FormProvider {...form}>
      <Layout pageTitle="Encomendas">
        <Orders status={orderStatusEnum.Encomendado} />
      </Layout>
    </FormProvider>
  );
};

export default OrdersPage;
