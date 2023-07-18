import React from 'react';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { OrderConfirmation } from '../../components/orderСonfirmation/OrderConfirmation';

export const OrderConfirmationPage = () => {
  return (
    <div>
      <Header />
      <OrderConfirmation />
      <FooterContainer />
    </div>
  );
};
