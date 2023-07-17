import React from 'react';
import { MainContent } from '../../components/main/mainContent/MainContent';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { HeaderMain } from '../../components/headerBlock/headerMain/HeaderMain';

export const MainPage = () => {
  return (
    <div>
      <HeaderMain />
      <MainContent />
      <FooterContainer />
    </div>
  );
};
