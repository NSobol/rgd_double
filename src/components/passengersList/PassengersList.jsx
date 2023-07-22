import React from 'react';
import s from './passengersList.module.css';
import { Passenger } from '../passenger/Passenger';

export const PassengersList = () => {
  const tickets = [1, 2];
  return (
    <div className={s.accordion}>
      {tickets.map((item, i) => (
        <Passenger key={i} opened={i} index={i} item={item} />
      ))}
    </div>
  );
};
