import React from 'react';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { Payment } from '../../components/payment/Payment';

export const PaymentPage = () => {
  return (
    <div>
      <Header />
      <Payment />
      <FooterContainer />
    </div>
  );
};
