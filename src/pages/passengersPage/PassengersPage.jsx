import React from 'react';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { Passengers } from '../../components/passengers/Passengers';

export const PassengersPage = () => {
  return (
    <div>
      <Header />
      <Passengers />
      <FooterContainer />
    </div>
  );
};
