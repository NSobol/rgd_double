import React from 'react';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { Trains } from '../../components/trains/Trains';
// import { useSelector } from 'react-redux';

export const ListTrainsPage = () => {
  // const data = data.items;
  // const { search } = useSelector((s) => s.search);
  // const { trains } = useSelector((s) => s.trains);
  // console.log(search);
  // console.log(trains);
 
  return (
    <div>
      <Header />
      <Trains />
      <FooterContainer />
    </div>
  );
};
