import React from 'react';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { OrderConfirmation } from '../../components/orderСonfirmation/OrderConfirmation';
import { Crumbs } from '../../components/crumbs/Crumbs';

export const OrderConfirmationPage = () => {
  return (
    <div>
      <Header />
      <Crumbs progress={4} />
      <OrderConfirmation />
      <FooterContainer />
    </div>
  );
};
