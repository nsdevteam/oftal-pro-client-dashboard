import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Layout } from '../../components';
import Orders from '../../views/orders';

const OrdersPage: FC = () => {
  const form = useForm({
    defaultValues: {
      eyes: { right: 0, left: 0 },
    },
  });

  return (
    <FormProvider {...form}>
      <Layout pageTitle="Pedidos">
        <Orders />
      </Layout>
    </FormProvider>
  );
};

export default OrdersPage;
