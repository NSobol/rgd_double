import React from 'react';
import { TrainsList } from '../../components/trainsList/TrainsList';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { DetailsTrip } from '../../components/detailsTrip/DetailsTrip';

export const ListTrainsPage = (data) => {
  return (
    <div>
      <Header />
      <div className='content'>
        <DetailsTrip />
        <TrainsList data={data} />
      </div>
      <FooterContainer />
    </div>
  );
};
