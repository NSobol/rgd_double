import React from 'react';
import { PersonDataForm } from '../personDataForm/PersonDataForm';
import { DetailsTrip } from '../detailsTrip/DetailsTrip';
import s from './payment.module.css';
import { Crumbs } from '../crumbs/Crumbs';

export const Payment = () => {
  return (
    <div className={s['payment']}>
      <Crumbs progress={3} />
      <div className={s['payment-content']}>
        <DetailsTrip />
        <PersonDataForm />
      </div>
    </div>
  );
};
