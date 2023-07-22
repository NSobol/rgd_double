import React from 'react';
import { DetailsTrip } from '../detailsTrip/DetailsTrip';
import s from './passengers.module.css';
import { PassengersList } from '../passengersList/PassengersList';
import { Crumbs } from '../crumbs/Crumbs';

export const Passengers = () => {
  return (
    <div className={s['passengers']}>
      <Crumbs progress={2} />
      <div className={s['passengers-content']}>
        <DetailsTrip />
        <PassengersList />
      </div>
    </div>
  );
};
