import React from 'react';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { Header } from '../../components/headerBlock/header/Header';
import { Loading } from '../../components/main/loading/Loading';

export const LoadingSearchPage = () => {
  return (
    <div>
      <Header />
      <Loading />
      <FooterContainer />
    </div>
  );
};
