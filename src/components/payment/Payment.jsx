import React from 'react';
import { PersonDataForm } from '../personDataForm/PersonDataForm';
import { DetailsTrip } from '../detailsTrip/DetailsTrip';
import s from './payment.module.css';

export const Payment = () => {
  return (
    <div className={s['payment']}>
      <div className={s['payment-breadCrumbs']}></div>
      <div className={s['payment-content']}>
        <DetailsTrip />
        <PersonDataForm />
      </div>
    </div>
  );
};
