import React from 'react';
import { DetailsTrip } from '../detailsTrip/DetailsTrip';
import s from './passengers.module.css';
import { PassengersList } from '../passengersList/PassengersList';

export const Passengers = () => {
  return (
    <div className={s['passengers']}>
      <div className={s['passengers-breadCrumbs']}></div>
      <div className={s['passengers-content']}>
        <DetailsTrip />
        <PassengersList />
      </div>
    </div>
  );
};
