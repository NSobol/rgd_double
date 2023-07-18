import React from 'react';
import { DetailsTrip } from '../detailsTrip/DetailsTrip';
import { OrderInfo } from '../orderInfo/OrderInfo';
import s from './orderConfirm.module.css';

export const OrderConfirmation = () => {
  return (
    <div className={s['confirm']}>
      <div className={s['confirm-breadCrumbs']}></div>
      <div className={s['confirm-content']}>
        <DetailsTrip />
        <OrderInfo />
      </div>
    </div>
  );
};
