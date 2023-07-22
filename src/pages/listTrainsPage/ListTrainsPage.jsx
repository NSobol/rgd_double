import React from 'react';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { Trains } from '../../components/trains/Trains';
// import { useSelector } from 'react-redux';

export const ListTrainsPage = () => {
  return (
    <div>
      <Header />
      <Trains />
      <FooterContainer />
    </div>
  );
};
