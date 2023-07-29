import React from 'react';
import { OrderConfirmation } from '../../components/orderСonfirmation/OrderConfirmation';
import { Crumbs } from '../../components/crumbs/Crumbs';

export const OrderConfirmationPage = () => {
  return (
    <div>
      <Crumbs progress={4} />
      <OrderConfirmation />
    </div>
  );
};
