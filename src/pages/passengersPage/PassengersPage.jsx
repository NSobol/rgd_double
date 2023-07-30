import React from 'react';
import { Crumbs } from '../../components/crumbs/Crumbs';
import { PassengersList } from './../../components/passengersList/PassengersList';
import { DetailsTrip } from './../../components/detailsTrip/DetailsTrip';
import s from './passengers.module.css';

export const PassengersPage = () => {
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
